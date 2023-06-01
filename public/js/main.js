 var game = {
		 	score: 0,
		 	totalScore:0,
		 	totalClicks:0,
		 	clickValue:1,
		 	version: 0.000,

		 	addToScore: function(amount){
		 		this.score += amount;
		 		this.totalScore += amount;
		 		display.updateScore();
		 	},

		 	getScorePerSecond: function() {
		 		var scorePerSecond = 0;
		 		for(i = 0; i < building.name.length; i++) {
		 			scorePerSecond += building.income[i] * building.count[i];
		 		}
		 		return scorePerSecond;
		 	}
		 };

		 var building = {
		 	name: [
		 	    "Cat Worker",
		 		"Cat Gangster",
		 		"Cat Boss",
		 		"Cat Killer",
		 		"Cat Lord",
		 		"Cat Dinnerbone",
		 		"Cat GOD"
		 	],
		 	image: [
		 		"Cat_Worker.png",
		 		"Cat_Gangster.png",
		 		"Cat_Boss.png",
		 		"Cat_Killer.png",
		 		"Cat_Lord.png",
		 		"Cat_Dinnerbone.png",
		 		"Cat-God.png"
		 	],
		 	count: [0,0,0,0,0,0,0],
		 	income:[
		 		1,
		 		4,
		 		16,
		 		188,
		 		1300,
		 		8400,
		 		54600

		 	],
		 	cost:[
		 		15,
		 		100,
		 		1100,
		 		12000,
		 		130000,
		 		1400000,
		 		20000000,
		 	],

		 	purchase: function(index) {
		 		if (game.score >= this.cost[index])
		 		{
		 			game.score -= this.cost[index];
		 			this.count[index]++;
		 			this.cost[index] = Math.ceil(this.cost[index] * 1.10);

		 			createSprite(this.image[index], this.name[index], 0, 150);

		 			display.updateScore();
		 			display.updateShop();
		 			display.updateUpgrades();
		 		}
		 	}
		 };
		 var arrayTest = {

		 };
		 var upgrade = {
		 	name: [
		 		"Greater Cat Worker",
		 		"Cat Paw",
		 		"Better Weapons",
		 		"Greaterer Cat Worker",	
		 		"Greater Cat Paw",	 		
		 		"Elite Cat Worker",
		 		"Increased Activity",
		 		"Best Cat Paw",
		 		"Max Gang",
		 		"McDonald's Boss",
		 		"Chick-Fil-A Boss",
		 		"Mark Zuck",
		 		"Deadly Cat Killer",
		 		"Super Deadly Cat Killer",
		 		"Extremely Deadly Cat Killer",
		 		"Major Cat Lord",
		 		"Awesome Cat Lord of Lithuania",
		 		"The Ultimate Cat Lord of Uzbekistan",
		 		"Minecraft Noob",
		 		"Average Minecrafter",
		 		"SSundee level minecrafter",
		 		"This is a god level gamer",
		 		"You are so good at this game holy nuts",
		 		"IDK what to put anymore just buy me"

		 		
		 	],
		 	description: [
		 		"Cat workers are twice as efficient",
		 		"Clicking is twice as efficient",
		 		"Cat gangs are twice as deadly",
		 		"Cat workers are twice as efficient",
		 		"Clicking is five times as efficient",
		 		"Cat workers are twice as efficient",
		 		"Cat gangs are twice as efficient",
		 		"Clicking is ten times as efficient",
		 		"Cat gangs are twice as efficient",
		 		"Cat Boss's are twice as efficient",
		 		"Cat Boss's are twice as efficient",
		 		"Cat Boss's are twice as efficient",
		 		"Cat Killer's are twice as efficient",
		 		"Cat Killer's are twice as efficient",
		 		"Cat Killer's are twice as efficient",
		 		"Cat Lord's are twice as efficient",
		 		"Cat Lord's are twice as efficient",
		 		"Cat Lord's are twice as efficient",
		 		"Cat Dinnerbone's are twice as efficient",
		 		"Cat Dinnerbone's are twice as efficient",
		 		"Cat Dinnerbone's are twice as efficient",
		 		"Cat Gods are twice as efficient",
		 		"Cat Gods are twice as efficient",
		 		"Cat Gods are infinity as efficient"
		 		
		 	
		 	],
		 	image: [
		 		"Cat_Worker.png",
		 		"reinforcedcatpaw.jpg",
		 		"Cat_Gangster.png",
		 		"Cat_Worker.png",
		 		"reinforcedcatpaw.jpg",
		 		"Cat_Worker.png",
		 		"Cat_Gangster.png",
		 		"reinforcedcatpaw.jpg",
		 		"Cat_Gangster.png",
		 		"Cat_Boss.png",
		 		"Cat_Boss.png",
		 		"Cat_Boss.png",
		 		"Cat_Killer.png",
		 		"Cat_Killer.png",
		 		"Cat_Killer.png",
		 		"Cat_Lord.png",
		 		"Cat_Lord.png",
		 		"Cat_Lord.png",
		 		"Cat_Dinnerbone.png",
		 		"Cat_Dinnerbone.png",
		 		"Cat_Dinnerbone.png",
		 		"Cat-God.png",
		 		"Cat-God.png",
		 		"Cat-God.png"
		 		

		 	],
		 	type: [
		 		"building",
		 		"click",
		 		"building",
		 		"building",
		 		"click",
		 		"building",
		 		"building",
		 		"click",
		 		"building",
		 		"building",
		 		"building",
		 		"building",
		 		"building",
		 		"building",
		 		"building",
		 		"building",
		 		"building",
		 		"building",
		 		"building",
		 		"building",
		 		"building",
		 		"building",
		 		"building",
		 		"building"
		 		
		 		
		 		
		 	],
		 	cost: [
		 		100,
		 		300,
		 		1000,
		 		500,
		 		10000,
		 		10000,
		 		5000,
		 		50000,
		 		50000,
		 		11000,
		 		55000,
		 		550000,
		 		120000,
		 		600000,
		 		6000000,
		 		1300000,
		 		6500000,
		 		65000000,
		 		14000000,
		 		70000000,
		 		700000000,
		 		200000000,
		 		1000000000,
		 		10000000000


		 		
		 	],
		 	buildingIndex: [
		 		0,
		 		-1,
		 		1,
		 		0,
		 		-1,
		 		0,
		 		1,
		 		-1,
		 		1,
		 		2,
		 		2,
		 		2,
		 		3,
		 		3,
		 		3,
		 		4,
		 		4,
		 		4,
		 		5,
		 		5,
		 		5,
		 		6,
		 		6,
		 		6
		 		
		 	],
		 	requirement: [
		 		10,
		 		100,
		 		10,
		 		50,
		 		500,
		 		100,
		 		50,
		 		1000,
		 		10,
		 		50,
		 		100,
		 		10,
		 		50,
		 		100,
		 		10,
		 		50,
		 		100,
		 		10,
		 		50,
		 		100,
		 		10,
		 		50,
		 		100

		 		
		 	],
		 	bonus: [
		 		2,
		 		2,
		 		2,
		 		2,
		 		5,
		 		2,
		 		2,
		 		2,
		 		2,
		 		2,
		 		2,
		 		2,
		 		2,
		 		2,
		 		2,
		 		2,
		 		2,
		 		2,
		 		2,
		 		2,
		 		2,
		 		2,
		 		1000000
		 		
		 	],
		 	purchased: [false, false, false, false, false, false, false,false, false, false, false, false, false,false,false, false,false, false, false,false, false, false,false],

		 	purchase: function(index) {
		 		if(!this.purchased[index] && game.score >= this.cost[index] || upgrade.purchased[i] === "false" && game.score >= this.cost[index]) 
		 			{
		 				if(this.type[index] == "building" && building.count[this.buildingIndex[index]] >= this.requirement[index]){
		 					document.getElementById("upgradeContainer").innerHTML = "";
			 				game.score -= this.cost[index];
			 				building.income[this.buildingIndex[index]] *= this.bonus[index];
			 				this.purchased[index] = true;

			 				display.updateUpgrades();
			 				display.updateScore();
		 				}
		 				else if(this.type[index] == "click" && game.totalClicks >= this.requirement[index]){
			 				document.getElementById("upgradeContainer").innerHTML = "";
			 				game.score -= this.cost[index];
			 				game.clickValue*=this.bonus[index];
			 				this.purchased[index] = true;

			 				diplay.updateUpgrades();
			 				display.updateScore();
		 				}
		 		}
		 	}
		 };
		 var display = {
		 	updateScore: function() {
		 		document.getElementById("score").innerHTML = game.score;
		 		document.getElementById("scorepersecond").innerHTML = game.getScorePerSecond();
		 		document.title = game.score + " Cat Coins - Cat Clicker"
		 	},

		 	updateShop: function(){
		 		document.getElementById("shopContainer").innerHTML = "";
		 		for(i = 0; i < building.name.length; i++) {
		 			if(game.totalScore > building.cost[i]-10)
		 			{
		 				var visible = " ";
		 				var visibleName = building.name[i];
		 				var visibleCost = building.cost[i] + " cat coins";
		 				var visibleCount = building.count[i];
		 			}
		 			else
		 			{
		 				visible = "hidden";
		 				var visibleName = "???";
		 				var visibleCost = " ";
		 				var visibleCount = "?";
		 			}
		 			document.getElementById("shopContainer").innerHTML += '<table id="shopTable" class="shopButton unselectable ' + visible + '" onclick="building.purchase('+i+')"><tr><td id = "image"><img src="../images/'+building.image[i]+'" height = "100px" width = "100px" ></td><td id = "nameAndCost"><p>'+visibleName+'</p><p><span>'+visibleCost+'</span></p></td><td id ="amount"><span>'+visibleCount+'</span></td></tr> </table>'
		 		}
		 	},
		 	updateUpgrades: function() {
		 		document.getElementById("upgradeContainer").innerHTML = "";

		 		for(i = 0; i < upgrade.name.length; i++){

		 			if(!upgrade.purchased[i] || upgrade.purchased[i] === "false") {
		 				if(upgrade.type[i] == "building" && building.count[upgrade.buildingIndex[i]] >= upgrade.requirement[i]) {
		 					document.getElementById("upgradeContainer").innerHTML += '<img class = "unselectable" src="../images/'+upgrade.image[i]+'" title="'+upgrade.name[i]+' &#10;'+upgrade.description[i]+' &#10; ('+upgrade.cost[i]+' cat coins)" onclick="upgrade.purchase('+i+')">';
		 				}
		 				else if(upgrade.type[i] == "click" && game.totalClicks >= upgrade.requirement[i]){
		 					//console.log("SUCCESS CLICK UPG LOAD")
							document.getElementById("upgradeContainer").innerHTML += '<img class = "unselectable" src="../images/'+upgrade.image[i]+'" title="'+upgrade.name[i]+' &#10;'+upgrade.description[i]+' &#10; ('+upgrade.cost[i]+' cat coins)" onclick="upgrade.purchase('+i+')">';
		 				}
		 			}
		 		}
		 	}

		 };


		function saveGame(){
			 $.get("/userInfo",function(data){	

		          $.ajax({
		            url: "/update",
		            type: "PUT",
		            data: {
		            	identifier:data.ident,
		            	score:game.score,
		            	count0: building.count[0],
		            	count1: building.count[1],
		            	count2: building.count[2],
		            	count3: building.count[3],
		            	count4: building.count[4],
		            	count5: building.count[5],
		            	count6: building.count[6],
		            	purchased0: upgrade.purchased[0],
		            	purchased1: upgrade.purchased[1],
		            	purchased2: upgrade.purchased[2],
		            	purchased3: upgrade.purchased[3],
		            	purchased4: upgrade.purchased[4],
		            	purchased5: upgrade.purchased[5],
		            	purchased6: upgrade.purchased[6],
		            	purchased7: upgrade.purchased[7],
		            	purchased8: upgrade.purchased[8],
		            	purchased9: upgrade.purchased[9],
		            	purchased10: upgrade.purchased[10],
		            	purchased11: upgrade.purchased[11],
		            	purchased12: upgrade.purchased[12],
		            	purchased13: upgrade.purchased[13],
		            	purchased14: upgrade.purchased[14],
		            	purchased15: upgrade.purchased[15],
		            	purchased16: upgrade.purchased[16],
		            	purchased17: upgrade.purchased[17],
		            	purchased18: upgrade.purchased[18],
		            	purchased19: upgrade.purchased[19],
		            	purchased20: upgrade.purchased[20],
		            	purchased21: upgrade.purchased[21],
		            	purchased22: upgrade.purchased[22],
		            	totalClicks: game.totalClicks,
		            	totalScore: game.totalScore,
		            	clickValue: game.clickValue

		            	//[0,0,0,0,0,0,0]
		            //sprites:sprites,
		            //buildings:building.count           
		            },
		            success: function(data){

		            	 if (data.error)
		                	alert("bad")
		                else {
		                	//console.log(data.clickValue)
		                  //building.count = data.buildings;
		                //  game.score = data.score;
		                //  for(i = 0; i < building.name.length; i++) {
		                //  	console.log("count" + i + " = " + data.count[i])
		 				//	}
		                 // sprites = data.sprites;
		                }
		              } ,     
		            dataType: "json"
		          });   

		      });
		          //console.log("Game Saved")
		  return false;
		}

	function loadGame(){
		          $.ajax({
		            url: "/read",
		            type: "GET",
		            data: {},
		            success: function(data){
		                if (data.error)
		                	createClicked();
		                else {	
		                  //building.count = data.buildings;
		                  game.score = data.score;
		                  game.totalScore = data.totalScore;
		                  game.totalClicks = data.totalClicks;
		                  game.clickValue = data.clickValue;



		                  for(i = 0; i < building.name.length; i++) {
		                  	building.count[i] = data.count[i];

		                  	for(y=0; y < data.count[i]; y++)
		                  	{
		                  		building.cost[i] = Math.ceil(building.cost[i] * 1.10);
		                  	}

		 					}

		                  for(i = 0; i < upgrade.purchased.length; i++) {
		                  	upgrade.purchased[i] = data.purchased[i];
		 					}

		                 // sprites = data.sprites;

						  LoadSprites();
		                }
		              } ,     
		            dataType: "json"
		          });   


		          //console.log("Game Loaded")
		  return false;
		}
		 function randomNumber(min, max) {
		 	return Math.round(Math.random() * (max - min) + min);
		 }
		 function fadeOut(element, duration, finalOpacity, callback) {
		 	let opacity = 1;

		 	let elementFadingInterval = window.setInterval(function() {
		 		opacity -= 50/duration;

		 		if(opacity <= finalOpacity){
		 			clearInterval(elementFadingInterval);
		 			callback();
		 		}

		 		element.style.opacity = opacity;
		 	},50);
		 }
		 function createNumberOnClicker(event) {
		 	let clicker = document.getElementById("clicker");

		 	let clickerOffset = clicker.getBoundingClientRect();
		 	let position = {
		 		x: event.pageX - clickerOffset.left + randomNumber(-5,5) -10,
		 		y: event.pageY - clickerOffset.top - 10
		 	}
		 	let element = document.createElement("div");
		 	element.textContent = "+" + game.clickValue;
		 	element.classList.add("number", "unselectable");
		 	element.style.left = position.x + "px";
		 	element.style.top = position.y + "px";


		 	clicker.appendChild(element);

		 	let movementInterval = window.setInterval(function() {
		 		if(typeof element == "undefined" && element == null)
		 			clearInterval(movementInterval);
		 		position.y--;
		 		element.style.top = position.y + "px";
		 	},10);
		 	

		 	fadeOut(element, 3000, 0.5, function(){
		 		element.remove();
		 	});
		 }
		 
		 document.getElementById("clicker").addEventListener("click", function(event) {
		 	clicked = true;
		 	game.totalClicks++;
		 	game.addToScore(game.clickValue);

		 	createNumberOnClicker(event);
		}, false);

		 window.onload = function(){
		 	display.updateScore();
		 	display.updateShop();
		 	display.updateUpgrades();
		 };
			let k = 0;
		 setInterval (function() {
		 	saveGame();
		 	
		 	
		 		
		 			if(game.totalScore > building.cost[k]-10)
		 			{		 				
			 			
			 				display.updateShop();
			 				display.updateUpgrades();	 
			 				k++;				
		 			}
		 		
		 }, 1000);


		 setInterval (function() {
		 	game.score += game.getScorePerSecond();
		 	game.totalScore += game.getScorePerSecond();
		 	display.updateScore();
		 }, 1000);
		 	//alert("score" + game.score);
			 /*
			 $.get("/userInfo",function(data){

	

		$.ajax({
	            url: "/update",
	            type: "PUT",
	            data: {
	            	identifier: data.ident,
	            score: game.score 
	            },
	            success: function(data){
	                if (data.error)
	                  alert("bad");
	                //else
	                //  alert("good");
	              } ,     
	            dataType: "json"
	          });   
	});	
		 */
		  setInterval (function() {
			 	$.get("/userInfo",function(data){	
		$.ajax({
            url: "/readNick",
            type: "GET",
            data: {},
            success: function(data){
                if (data.error)
                  alert("bad");
                else {
                	//console.log("name " + data.name);

// figure out how to set specific row 

					tableData = '<tr>' +
                  		'<td>'   + '</td>' 
                  		+ '<td>'  + '</td>';
                  		
                	for(i=0;i<data.name.length;i++){		
                		//console.log("score " + data.name[i].score[i]);

                		tableData += '<tr>' +
                  		'<td>' + data.name[i] + '</td>' 
                  		+ '<td>' + data.score[i] + '</td>' 
                  	//	console.log("plus equals");
    				}	
                	
               }

              } ,     
            dataType: "json"
            
          });

        }); 

		 $("#tableData").html(tableData);

		 }, 10000);



	
		 function play(){
    
    let audio = document.createElement("audio");

    audio.volume = .1;
    audio.src = '../media/' + 'click' + '.wav';
    audio.play();

}

	
 var canvas2 = document.getElementById('myCanvas2');
		var context2 = canvas2.getContext('2d');

		var fallTimer2;
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var imgID = 0;
var fallTimer;
var clicked = false;
    fallTimer = setInterval(function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();
        context.fill();
        if (newCircle % objects.time == 0 && clicked) {
            var xloc = Math.floor(Math.random()*canvas.width);
            objects.centers.push([xloc,0]);
            objects.sizes.push(10);
            var myColor = "#";
            for (q=0;q<6;q++) {
                myColor = myColor + colorCombos[Math.floor(Math.random(0,1)*16)];
            }
            objects.colors.push(myColor);
            objects.stepSize.push(Math.random() * (5 - .5) + .5);
            if(imgID == 0)
            {
	            objects.images.push(createImage("Particle_effect1.png"));
	       		
       		}
        	else if(imgID == 1)
        	{
	        	objects.images.push(createImage("Particle_effect2.png"));
	       		
       		}
        	else if(imgID == 2)
        	{
	        	objects.images.push(createImage("Particle_effect3.png"));
	       		
    		}
       		else if(imgID == 3)
       		{
       		objects.images.push(createImage("Particle_effect4.png"));
       		}
       		else
       		{
       		objects.images.push(createImage("Particle_effect5.png"));
       		imgID = -1;
       		}
            objects.number++;
            clicked = false;
            imgID++;
        }

        newCircle++;
        objects.moveDown();

       
        canvas2.width = window.innerWidth;
        canvas2.height = window.innerHeight;
        context2.clearRect(0, 0, canvas2.width, canvas2.height);
        context2.beginPath();
        context2.fill();
        drawCPS();
    },10);


   
    

var sCanvas = document.getElementById('sCanvas');
var ctx = sCanvas.getContext('2d');

var fallTimer3;
    fallTimer3 = setInterval(function() {
        sCanvas.width = 600;
        sCanvas.height =1400;
        ctx.beginPath();
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.stroke();

         ctx.drawImage(createImage("workerBG.jpg"), 0, 0, sCanvas.width, 200);
         ctx.drawImage(createImage("gangBG.jpg"), 0, 200, sCanvas.width, 200);
         ctx.drawImage(createImage("organisationBG.jpg"), 0, 400, sCanvas.width, 200);
         ctx.drawImage(createImage("countryBG.jpg"), 0, 600, sCanvas.width, 200);
         ctx.drawImage(createImage("worldBG.jpg"), 0, 800, sCanvas.width, 200);
         ctx.drawImage(createImage("universeBG.avif"), 0, 1000, sCanvas.width, 200);
         ctx.drawImage(createImage("godBG.jpg"), 0, 1200, sCanvas.width, 200);


         sprites.draw()

    },10);


function createSprite(type, name, xpos, ypos) {

	let workerXpos = 0;
	let gangXpos = 0;
	let orgXpos = 0;
	let countryXpos = 0;
	let worldXpos = 0;
	let universeXpos = 0;
	let godXpos = 0;


	for (i=0;i<sprites.number;i++) {
            if(sprites.name[i]=="Cat Worker")
            {
            	workerXpos+=25;


            }
            else if(sprites.name[i]=="Cat Gangster")
            {
            	gangXpos+=25;
            }
            else if(sprites.name[i]=="Cat Boss")
            {
            	orgXpos+=25;
            	
            }
            else if(sprites.name[i]=="Cat Killer")
            {
            	countryXpos+=25;
            	
            }
            else if(sprites.name[i]=="Cat Lord")
            {
            	worldXpos+=25;
            	
            }
            else if(sprites.name[i]=="Cat Dinnerbone")
            {
            	universeXpos+=25;
            	
            }
            else if(sprites.name[i]=="Cat GOD")
            {
            	godXpos+=25;
            	
            }

        }

            if(name=="Cat Worker")
            {
            	ypos = 150;
            	xpos=workerXpos;


            }
            else if(name=="Cat Gangster")
            {
            	ypos = 350;
            	xpos=gangXpos;
            }
            else if(name=="Cat Boss")
            {
            	ypos = 550;
            	xpos=orgXpos;
            	
            }
            else if(name=="Cat Killer")
            {
            	ypos = 750;
            	xpos=countryXpos;
            }
            else if(name=="Cat Lord")
            {
            	ypos = 950;
            	xpos=worldXpos;
            	
            }
            else if(name=="Cat Dinnerbone")
            {
            	ypos = 1150;
            	xpos=universeXpos;
            	
            }
            else if(name=="Cat GOD")
            {
            	ypos = 1350;
            	xpos=godXpos;
            	
            }

	sprites.images.push(createImage(type));
	sprites.name.push(name);
	sprites.xpos.push(xpos);
	sprites.ypos.push(ypos);
	sprites.number++;

	//console.log("drawn")
}

function LoadSprites() {

	let ypos = 150;
	for(i = 0; i < building.name.length; i++) {

			let xpos = 0;
			for(y=0; y < building.count[i]; y++)
			{

			sprites.images.push(createImage(building.image[i]));
			sprites.name.push(building.name[i]);
			sprites.xpos.push(xpos);
			sprites.ypos.push(ypos);
			sprites.number++;
			xpos+=25;	

			}
			ypos+=200;

 		}
//console.log("sprites loaded");
}


function drawCPS() {

    //console.log(newCircle/100);
    var decimal = 1/game.getScorePerSecond();
    // console.log(newCircle/100 + " + " + decimal.toFixed(10))
if(game.getScorePerSecond() != 0)
    if(game.getScorePerSecond() < 11)
    {
if(newCircle/100 % decimal.toFixed(2) == 0)
     {

        play();
        newCircle = 0;
        clicked = true;
     }
    }
    else
    {
        decimal = 1/10.5;
        if(newCircle/100 % decimal.toFixed(2) == 0)
     {
         play();
        newCircle = 0;
        clicked = true;
     }
    }
    
     

}
var sprites = {
	number : 0,
	name: [],
	xpos: [],
	ypos : [],
	images : [],
	draw : function(){
		
         ctx.drawImage(createImage("workerBG.jpg"), 0, 0, sCanvas.width, 200);
         ctx.drawImage(createImage("gangBG.jpg"), 0, 200, sCanvas.width, 200);
         ctx.drawImage(createImage("organisationBG.jpg"), 0, 400, sCanvas.width, 200);
         ctx.drawImage(createImage("countryBG.jpg"), 0, 600, sCanvas.width, 200);
         ctx.drawImage(createImage("worldBG.jpg"), 0, 800, sCanvas.width, 200);
         ctx.drawImage(createImage("universeBG.avif"), 0, 1000, sCanvas.width, 200);
         ctx.drawImage(createImage("godBG.jpg"), 0, 1200, sCanvas.width, 200);

		var i = 0;
        for (i=0;i<sprites.number;i++) {
            ctx.drawImage(sprites.images[i], sprites.xpos[i], sprites.ypos[i], 50, 50);
        }
	}
};

var colorCombos = "0123456789ABCDEF";

var newCircle = 0;

var createImage = function(src) {
  var img   = new Image();
  img.src   = "../images/" + src;
  return img; 
};

var objects = {
    number : 0,
    images : [], //array of images
    centers : [], //array of locations
    sizes : [], //how big each circle is
    colors : [],
    time : 10,
    stepSize : [],
    moveDown : function() {
        var i = 0;
        var removals = [];
        for (i=0;i<objects.number;i++) {
            objects.centers[i][1] = objects.centers[i][1] + objects.stepSize[i];
        }
        for (j=0;j<removals.length;j++) {
            objects.centers.splice(removals[j],1);
            objects.sizes.splice(removals[j],1);
            objects.stepSize.splice(removals[j],1);
            objects.images.splice(removals[j],1);
            objects.number = objects.number -1;
        }
        objects.drawCircles();
    },
    drawCircles : function() {
        for (i=0;i<objects.number;i++) {
            
            context.arc(objects.centers[i][0],objects.centers[i][1],
                        objects.sizes[i],0,2*Math.PI,false);
            var x = objects.centers[i][0];
            var y = objects.centers[i][1];


            context.drawImage(objects.images[i], x, y, 50, 50);
            context.beginPath();
        }
    },
};

function updateTime() {
    objects.time =  document.getElementById("red").value;
}

function updateStep() {
//    objects.stepSize = document.getElementById("green").value / 20;
    
}

function logoutClicked(){
//console.log("session logoutClicked")
  $.get("/logout",function(data){
//console.log("session logout function callback");    
    window.location = data.redirect;
  });
  return false;             
}

$(document).ready(function(){ 
//console.log("session doc ready")


loadGame();
display.updateScore();
display.updateShop();
display.updateUpgrades();

});