var express = require("express");
var mongoose = require("mongoose");
var InfoModel = require("./models/Info");
//const Data = require('./Data');
//var routes = require("./routes");

let myDatabase = function() {
}

  let playerlist = [];
 let scorelist = [];

myDatabase.prototype.postData = function(data,res) {
  let obj = {ident:data.ident,name:data.name,score:data.score,count:data.count,purchased:data.purchased,totalClicks:data.totalClicks,totalScore:data.totalScore,clickValue:data.clickValue};
  InfoModel.create(obj,function(error,info) {
      if (error) {
          return res.json({error:true});
      }
      return res.json({error:false});
  });
}

myDatabase.prototype.getData = function(name,res) {

//console.log("getData");
  InfoModel.find({name:name},function(error,info) {
      if (error) {
          return res.json({error:true});
      }
      else if (info == null) {
          return res.json({error:true});
      }

      if (info.length == 1)    
          return res.json({error:false,ident:info[0].ident,score:info[0].score,count:info[0].count,purchased:info[0].purchased,totalClicks:info[0].totalClicks,totalScore:info[0].totalScore,clickValue:info[0].clickValue});
      else
          return res.json({error:true});
   });
}

 myDatabase.prototype.getDataNick = function(name,res) {

//console.log("getDataNick");
  InfoModel.find({},function(error,info) {
      if (error) {
          return res.json({error:true});
      }
      else if (info == null) {
          return res.json({error:true});
      }
//console.log("infolength " + info.length);
scorelist = [];

      for(i = 0; i < info.length; i++) 
      {  

        scorelist.push(info[i].score);
          
      }
      
      playerlist = [];
      for(i = 0; i < info.length; i++) 
      {  
        //console.log(playerlist.length);
        //if (i <= playerlist.length)
        //{
        //if (playerlist.includes(info[i].name))
        //     break   
        if (playerlist.includes(info[i].name) != true)
        playerlist.push(info[i].name);  
        //  }     
        }
      //  console.log("playerList " + playerlist);

        return res.json({error:false,name:playerlist,score:scorelist});
    //  else
      //    return res.json({error:true});
   });
}

myDatabase.prototype.putData = function(data,res) { 
//  InfoModel.findOneAndUpdate({ident:data.ident},{name:data.name,gradeLevel:data.gradeLevel},function(error,oldData) {
  InfoModel.findOneAndUpdate({name:data.name},{ident:data.ident,score:data.score,count:data.count,purchased:data.purchased,totalClicks:data.totalClicks,totalScore:data.totalScore,clickValue:data.clickValue},function(error,oldData) {
    if (error) {
      return res.json({error:true});
    }
    else if (oldData == null) {
      return res.json({error:true});
    }

//    console.log("old identA = " + identA);
//    if (identA < data.ident)
//      identA = data.ident;
//    console.log("new identA = " + identA);

    return res.json({error:false,count:data.count,score:data.score,purchased:data.purchased,totalClicks:data.totalClicks,totalScore:data.totalScore,clickValue:data.clickValue});
  });
}

myDatabase.prototype.deleteData = function(name,res) {
    InfoModel.remove({name:name},function(error,removed) {
        if (error) {
            return res.json({error:true});
        }        
        if (removed.result.n == 0)
            return res.json({error:true});
        return res.json({error:false});
    });
}

module.exports = myDatabase;

 
