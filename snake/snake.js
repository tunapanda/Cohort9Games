var snake;
var update;
var bg;
var Thug;
var img;
var img2;
var img3;
var img4;
var img5;



//Delcare Global Variables
var s;
var scl = 20;
var food;
var child;
//playfield = 800;

// p5js Setup function - required

function setup() {
  //createCanvas(playfield, 640);
  createCanvas(window.innerWidth,window.innerHeight);
  img = loadImage("images/tree.png");  
  img2 = loadImage("images/tree2.png");
  img3 = loadImage("images/tree3.png");
  img4 = loadImage("images/tree4.png");
  img5 = loadImage("images/tree5.png");
  //Thug =loadImage("images/Thug.png");  
  background(0,51,12);
  s = new Snake();
  frameRate (10);
  pickLocation();


}

// p5js Draw function - required

function draw() {
   background(0,51,12);
   scoreboard();
  if (s.eat(food)) {
    pickLocation();
  }
  s.death();
  s.update();
  s.show();

  fill (255,0,100);
  rect(food.x,food.y, scl, scl);
 
	var m1=-725;
	var m2=-600;
	var m3=500;
	var m4=-600;
	var m5=-730;
	var m6=190;
	var m7=500;
	var m8=190;
	var m9=window.innerWidth/2;
	var me=window.innerHeight/2;

	image(img,m1,m2);
        image(img2,m3,m4);
	image(img3,m5,m6);
	image(img4,m7,m8);
	image(img5,m9,me);
	

 if(this.x == 10 && this.x >=windo.innerWidth+10){
	backround(255,0,0);
	}
}

// Pick a location for food to appear

function pickLocation() {
  var cols = floor(window.innerWidth/scl);
  var rows = floor(window.innerHeight/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);


  // Check the food isn't appearing inside the tail

  for (var i = 0; i < s.tail.length; i++) {
    var pos = s.tail[i];
    var d = dist(food.x, food.y, pos.x, pos.y);
    if (d < 1) {
      pickLocation();
    }
  }
}

// scoreboard

function scoreboard() {
  fill(0,250,0);
  rect(10, 750, 350, 40);
  fill(255);
  textFont("Georgia");
  textSize(18);
  text("Score: ", 15, 770);
  text("Highscore: ", 230, 770)
  text(s.score, 75, 770);
  text(s.highscore, 320, 770)
}

// CONTROLS function

function keyPressed() {
  if (keyCode === UP_ARROW){
      s.dir(0, -1);
  }else if (keyCode === DOWN_ARROW) {
      s.dir(0, 1);
  }else if (keyCode === RIGHT_ARROW) {
      s.dir (1, 0);
  }else if (keyCode === LEFT_ARROW) {
      s.dir (-1, 0);
  }
  
}

// SNAKE OBJECT

function Snake() {
  this.x =0;
  this.y =0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0;
  this.tail = [];
  this.score = 1;
  this.highscore = 1;

  this.dir = function(x,y) {
    this.xspeed = x;
    this.yspeed = y;
  }

  this.eat = function(pos) {
    var d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 1) {
      this.total++;
      this.score++;
      text(this.score, 70, 625);
      if (this.score > this.highscore) {
        this.highscore = this.score;
      }
      text(this.highscore, 540, 625);
      return true;
    } else {
      return false;
    }
  }
	var t1= 0;
        var t2 =1;
	var t3 =innerWidth;
	var t4 =0;
	var t5 =0;
	var t6 =innerHeight;
	var t7 =innerWidth;
	var t8 =innerHeight;
	var t9 =window.innerWidth/2;
	var t10 =window.innerHeight/2; 
 	
  this.death = function() {
	var t1= 0;
        var t2 =1;
	var t3 =innerWidth;
	var t4 =0;
	var t5 =0;
	var t6 =innerHeight;
	var t7 =innerWidth;
	var t8 =innerHeight;
	var t9 =window.innerWidth/2;
	var t10 =window.innerHeight/2; 
 	


    for (var i = 0; i < this.tail.length; i++) {
      var pos = this.tail[i];
      var d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {
        this.total = 0;
        this.score = 0;
        this.tail = [];
      }
    }
	var detectTree = dist(this.x,this.y,t1,t2);
	if (detectTree <= 30){
	background(98,0,0);
        text("GAME OVER",window.innerWidth/2,window.innerHeight/2);}
	var detectTree = dist(this.x,this.y,t3,t4);
	if (detectTree <=30){
	background(98,0,0);
       text("GAME OVER",window.innerWidth/2,window.innerHeight/2);}
	var detectTree = dist(this.x,this.y,t5,t6);
	if (detectTree <=30){
	background(98,0,0);
	text("GAME OVER",window.innerWidth/2,window.innerHeight/2);}
	var detectTree = dist(this.x,this.y,t7,t8);
	if (detectTree <=30){
	background(98,0,0);
	text("GAME OVER",window.innerWidth/2,window.innerHeight/2);}
	var detectTree = dist(this.x,this.y,t9,t10);
	if (detectTree <=30){
	background(98,0,0);
	text("GAME OVER",window.innerWidth/2,window.innerHeight/2);}
	

	

  }

  this.update = function(){
    if (this.total === this.tail.length) {
      for (var i = 0; i < this.tail.length-1; i++) {
        this.tail[i] = this.tail[i+1];
    }

    }
    this.tail[this.total-1] = createVector(this.x, this.y);

    this.x = this.x + this.xspeed*scl;
    this.y = this.y + this.yspeed*scl;

    this.x = constrain(this.x, 0, window.innerWidth-scl);
    this.y = constrain(this.y, 0, window.innerHeight-scl);


  }
  this.show = function(){
    fill(255);
    for (var i = 0; i < this.tail.length; i++) {
        rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }

    rect(this.x, this.y, scl, scl);
  }






}

 
