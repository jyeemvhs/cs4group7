var express = require("express");
var passport = require("passport");
var path = require("path");


var User = require("./models/user");
var router = express.Router();

const myDatabase = require('./myDatabase');
let db = new myDatabase();

const Info = require('./Info');


router.use(function(req, res, next) {
  res.locals.currentUserjy = req.user;
  res.locals.errors = req.flash("error");
  res.locals.infos = req.flash("info");
  next();
});

//new create code from signup.
router.post('/create', function(req, res){
    if (!req.isAuthenticated()) {
        console.log("req is not Authenticated");
        res.json({error:true});
        return;
    }

    let count = [0,0,0,0,0,0,0];

    let purchased = [false, false, false, false, false, false, false,false, false, false, false, false, false,false,false, false,false, false, false,false, false, false,false]

    console.log(count);

    let trimTotalClicks = req.body.totalClicks.trim();
    if (trimTotalClicks == "") {
        res.json({error:true});
        return;
    }

    let totalClicks = Number(trimTotalClicks);
    if (Number.isNaN(totalClicks)) {
        res.json({error:true});
        return;
    }

    let trimtotalScore = req.body.totalScore.trim();
    if (trimtotalScore == "") {
        res.json({error:true});
        return;
    }

    let totalScore = Number(trimtotalScore);
    if (Number.isNaN(totalScore)) {
        res.json({error:true});
        return;
    }

    let trimIdentifier = req.body.identifier.trim();
    if (trimIdentifier == "") {
        res.json({error:true});
        return;
    }

    let identifier = Number(trimIdentifier);
    if (Number.isNaN(identifier)) {
        res.json({error:true});
        return;
    }

    let trimscore = req.body.score.trim();
    if (trimscore == "") {
        res.json({error:true});
        return;
    }

    let score = Number(trimscore);
    if (Number.isNaN(score)) {
        res.json({error:true});
        return;
    }
     let trimclickValue = req.body.clickValue.trim();
    if (trimscore == "") {
        res.json({error:true});
        return;
    }

    let clickValue = Number(trimclickValue);
    if (Number.isNaN(clickValue)) {
        res.json({error:true});
        return;
    }
    
//    let name = req.body.name.trim();
//    if (name == "") {
//        res.json({error:true});
//        return;
//    }
    
    let obj = new Info(identifier,req.user.username,score,count,totalClicks,purchased,totalScore,clickValue);
////change code       
    db.postData(obj,res);
////    return(db.postData(obj,res));
///*
//    let val = db.postData(obj);
//    if (val)
//        res.json({error:false});
//    else
//        res.json({error:true});
//*/

    console.log("post create routesData.js");
//    res.json({error:true});
});

router.get('/read', function(req, res){
    if (!req.isAuthenticated()) {
        console.log("req is not Authenticated");
        res.json({error:true});
        return;
    }

//changed code.
    return(db.getData(req.user.username,res));
/*
    let val = db.getData(identifier);
    if (val == null)
        res.json({error:true});
    else
        res.json({error:false,name:val.name});
*/

});

router.get('/readNick', function(req, res){
    if (!req.isAuthenticated()) {
        //console.log("req is not Authenticated");
        res.json({error:true});
        return;
    }

//changed code.
    return(db.getDataNick(req.user.username,res));
/*
    let val = db.getData(identifier);
    if (val == null)
        res.json({error:true});
    else
        res.json({error:false,name:val.name});
*/

});

router.put('/update', function(req, res){

    let count = [];

    count[0] = req.body.count0;
    count[1] = req.body.count1;
    count[2] = req.body.count2;
    count[3] = req.body.count3;
    count[4] = req.body.count4;
    count[5] = req.body.count5;
    count[6] = req.body.count6;

   // console.log("count = " + count)

    let purchased = [];

    purchased[0] = req.body.purchased0;
    purchased[1] = req.body.purchased1;
    purchased[2] = req.body.purchased2;
    purchased[3] = req.body.purchased3;
    purchased[4] = req.body.purchased4;
    purchased[5] = req.body.purchased5;
    purchased[6] = req.body.purchased6;
    purchased[7] = req.body.purchased7;
    purchased[8] = req.body.purchased8;
    purchased[9] = req.body.purchased9;
    purchased[10] = req.body.purchased10;
    purchased[11] = req.body.purchased11;
    purchased[12] = req.body.purchased12;
    purchased[13] = req.body.purchased13;
    purchased[14] = req.body.purchased14;
    purchased[15] = req.body.purchased15;
    purchased[16] = req.body.purchased16;
    purchased[17] = req.body.purchased17;
    purchased[18] = req.body.purchased18;
    purchased[19] = req.body.purchased19;
    purchased[20] = req.body.purchased20;
    purchased[21] = req.body.purchased21;
    purchased[22] = req.body.purchased22;

    let trimTotalClicks = req.body.totalClicks.trim();
    if (trimTotalClicks == "") {
        res.json({error:true});
        return;
    }

    let totalClicks = Number(trimTotalClicks);
    if (Number.isNaN(totalClicks)) {
        res.json({error:true});
        return;
    }


    let trimIdentifier = req.body.identifier.trim();
    if (trimIdentifier == "") {
        res.json({error:true});
        return;
    }

    let trimtotalScore = req.body.totalScore.trim();
    if (trimtotalScore == "") {
        res.json({error:true});
        return;
    }

    let totalScore = Number(trimtotalScore);
    if (Number.isNaN(totalScore)) {
        res.json({error:true});
        return;
    }

    let identifier = Number(trimIdentifier);
    if (Number.isNaN(identifier)) {
        res.json({error:true});
        return;
    }

    let trimscore = req.body.score.trim();
    if (trimscore == "") {
        res.json({error:true});
        return;
    }

    let score = Number(trimscore);
    if (Number.isNaN(score)) {
        res.json({error:true});
        return;
    }
let trimclickValue = req.body.clickValue.trim();
    if (trimscore == "") {
        res.json({error:true});
        return;
    }

    let clickValue = Number(trimclickValue);
    if (Number.isNaN(clickValue)) {
        res.json({error:true});
        return;
    }
console.log("here = " + score);
    let obj = new Info(identifier,req.user.username,score,count,trimTotalClicks,purchased,totalScore,clickValue);
//changed code.
    return(db.putData(obj,res));
/*    
    let val = db.putData(obj);
    if (val)
        res.json({error:false});
    else
        res.json({error:true});
 
*/
});

router.delete('/delete/:identifier', function(req, res){

    if (!req.isAuthenticated()) {
       // console.log("req is not Authenticated");
        res.json({error:true});
        return;
    }

//changed code.
//    return( db.deleteData(identifier,res));
    return( db.deleteData(req.user.username,res));
/*
    let val = db.deleteData(identifier);
    if (val == null)
        res.json({error:true});
    else
        res.json({error:false});
*/
});



router.get('/readAdmin', function(req, res){
    if (!req.isAuthenticated()) {
      //  console.log("req is not Authenticated");
        res.json({error:true});
        return;
    }

//changed code.
//console.log(req.query.username);
    return(db.getData(req.query.username,res));
/*
    let val = db.getData(identifier);
    if (val == null)
        res.json({error:true});
    else
        res.json({error:false,name:val.name});
*/

});



router.put('/updateAdmin', function(req, res){

    if (!req.isAuthenticated()) {
       // console.log("req is not Authenticated");
        res.json({error:true});
        return;
    }


    let trimIdentifier = req.body.identifier.trim();
    if (trimIdentifier == "") {
        res.json({error:true});
        return;
    }

    let identifier = Number(trimIdentifier);
    if (Number.isNaN(identifier)) {
        res.json({error:true});
        return;
    }


    let trimgradeLevel = req.body.gradeLevel.trim();
    if (trimgradeLevel == "") {
        res.json({error:true});
        return;
    }

    let gradeLevel = Number(trimgradeLevel);
    if (Number.isNaN(gradeLevel)) {
        res.json({error:true});
        return;
    }
//console.log("here = " + gradeLevel);
    let obj = new Info(identifier,req.body.username,gradeLevel,req.body.drives);
//changed code.
    return(db.putData(obj,res));

});


module.exports = router;

