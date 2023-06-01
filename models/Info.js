

var mongoose = require("mongoose");

//Schema is a decription (the definition) of the mongoDB document.
var infoSchema = mongoose.Schema({
	ident: {
		required: true,
		unique: true,
		type:String
	},
	name: {
		required: true,
		unique: true,		
		type:String
    },
	score: {
		required: true,
		type: Number
	},
	count: {
		required: true,
		type: Array
	},
	totalClicks: {
		required: true,
		type: Number
	},
	purchased: {
		required: true,
		type: Array
	},
	totalScore: {
		required: true,
		type: Number
	},
	clickValue: {
		required: true,
		type: Number
	}
});

var Info = mongoose.model("Info", infoSchema);

module.exports = Info;



