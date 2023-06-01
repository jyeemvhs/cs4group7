var express = require("express");
var passport = require("passport");
var path = require("path");
var Promise = require('promise');

var Info = require("./models/Info");
var User = require("./models/user");
var router = express.Router();

//function ensureAuthenticated(req, res, next) {
//  if (req.isAuthenticated()) {
//    next();
//  } else {
//    req.flash("info", "You must be logged in to see this page.");
//    res.redirect("/login");
//  }
//}

router.use(function(req, res, next) {
  res.locals.currentUserjy = req.user;
  res.locals.errors = req.flash("error");
  res.locals.infos = req.flash("info");
  next();
});

//added code
//global.identA = 0;
let identA = 0;

function initIdent(){
  return new Promise(function(resolve,reject) {
      console.log("call initIdent");
      Info.find({},function(err,user) {
        if (err) {
          console.log(err);
          reject(err);
        }
        else {
          let objs = [];
          for (let i=0;i<user.length;i++) {
            if (Number(identA) < Number(user[i].ident))
              identA = user[i].ident;
          }
          resolve(identA);          
        }
      });
  });
}



router.get("/successroot", function(req, res) {
console.log("get successroot");
	res.json({redirect:"/"});	
});

router.get("/failroot", function(req, res) {
console.log("get failroot");
	res.json({redirect:"/login"});	
});


router.get("/successsignup", function(req, res) {
console.log("get successsignup");
    if (req.user.username == "admin")
    {
      res.json({redirect:"/session"});      
    }
    else
    {
      identA++;
      console.log("identA = " + identA);
      res.json({redirect:"/session",ident:identA});    
    }
});



router.get("/failsignup", function(req, res) {
console.log("get failsignup");
	res.json({redirect:"/login"});	
});


router.get("/successlogin", function(req, res) {
console.log("get successlogin");
    if (req.user.username == "admin")
    {
      res.json({redirect:"/session"});      
    }
    else
    {
      res.json({redirect:"/session"});    
    }
  console.log("end of successlogin");
});

router.get("/faillogin", function(req, res) {
console.log("get failsignup");
	res.json({redirect:"/login"});	

});






router.get("/", function(req, res, next) {
  console.log("get root");
      let thePath = path.resolve(__dirname,"public/views/login.html");    
      res.sendFile(thePath);    
});


router.get("/signup", function(req, res) {
console.log("get signup");
  var initializePromise = initIdent();
  initializePromise.then(
    function(result) {
      console.log("in init Promise " + result);
      let thePath = path.resolve(__dirname,"public/views/signup.html");    
      res.sendFile(thePath);    
    },
    function(err) {
      console.log(err);
      let thePath = path.resolve(__dirname,"public/views/login.html");    
      res.sendFile(thePath);       
    }
  );  
});

router.get("/login", function(req, res) {
console.log("get login");
      let thePath = path.resolve(__dirname,"public/views/login.html");    
      res.sendFile(thePath);    
});


router.get("/session", function(req, res) {
  console.log("get session");
  if (req.isAuthenticated()) {
    console.log("sendFile session.html")
	let thePath = path.resolve(__dirname,"public/views/index.html");		
	res.sendFile(thePath);	
  } else {
    console.log("sendFile login.html")
  	let thePath = path.resolve(__dirname,"public/views/login.html");		
	res.sendFile(thePath);	
  }
});

router.get("/adminsession", function(req, res) {
  console.log("get adminsession");
  if (req.isAuthenticated()) {
    console.log("sendFile adminsession.html")
  let thePath = path.resolve(__dirname,"public/views/index.html");    
  res.sendFile(thePath);  
  } else {
    console.log("sendFile login.html")
    let thePath = path.resolve(__dirname,"public/views/login.html");    
  res.sendFile(thePath);  
  }
});


router.get("/adminInfo",function(req,res){
  if (req.isAuthenticated()) {

        if (req.user.username == "admin")
        {
            initAdmin(req,res);
        }
        else
          res.json(null);          
  }
  else {
    res.json(null);
  }
});

//==================
function initAdmin(req,res) {
  console.log("initAdmin");
  console.log(req.user.username);
            Info.find({},function(error,info) {
              if (error) {
                return res.json(null);
              } else {
                let list = [];
                for (let i=0;i<info.length;i++) {
                  console.log(info[i].name);
                  list.push({ident:info[i].ident,name:info[i].name});
                }
                res.json ({ ident:req.user.ident,username: req.user.username,userList:list});
              }
            });

}



router.get("/userInfo",function(req,res){
  console.log("get userInfo");
     if (req.isAuthenticated()) {
  console.log("req isAuthenticated");
  console.log("valueJY = " + req.user.valueJY);    /* user defined value */
            Info.find({name:req.user.username},function(error,info) {
              if (error) {
                return res.json(null);
              } else {
                res.json({username:req.user.username,ident:info[0].ident,score:info[0].score,count:info[0].count,totalClicks:info[0].totalClicks,purchased:info[0].purchased,totalScore:info[0].totalScore,clickValue:info[0].clickValue});
             }
            });
	}
	else {
  console.log("req is not Authenticated");
		res.json(null);
	}
});




router.get("/logout", function(req, res) {
  console.log("get logout")
  if (req.isAuthenticated()) {
  console.log("req isAuthenticated");
    req.logout();
    res.redirect("/successroot");
  } else {
  console.log("req is not Authenticated");
    res.redirect("/failroot");
  }
});

router.post("/signup", function(req, res, next) {
console.log("post signup");

  var username = req.body.username;
  var password = req.body.password;

  User.findOne({ username: username }, function(err, user) {
console.log("User findOne function callback")
    if (err) 
    {
      console.log("err"); 
      return next(err); 
    }
    if (user) {
      console.log("user")
      req.flash("error", "User already exists");
      return res.redirect("/failsignup");
    }
console.log("new User")
    var newUser = new User({
      username: username,
      password: password
    });
    newUser.save(next);    //goes to user.js (userSchema.pre(save))
  });


}, passport.authenticate("login", {       //goes to setuppassport.js  (passport.use("login"))
  successRedirect: "/successsignup",
  failureRedirect: "/failsignup",
  failureFlash: true
}));




router.post("/login", passport.authenticate("login", {
  successRedirect: "/successlogin",
  failureRedirect: "/faillogin",
  failureFlash: true
}));

module.exports = router;
