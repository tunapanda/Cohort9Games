var img;
var img1;
var img2;
var img3;
var v = 400;
var v1 = 200;
var v2 = 300;
var v3 = 200;
var v4 = 100;
var v5 = 100;
var v6 = 500;
var v7 = 100;
var speed1 = 10;
var speed2 = 10;
var speed3 = 15;
var speed4 = 5;
var speed5 = 15;
var speed6 = 25;
function setup(){
createCanvas(900,600);
img = loadImage("cow.png");	
img1 = loadImage("goat.png");
img2 = loadImage("ghost.png");
img3 = loadImage("elephant.png");
}
function draw(){
background(100,20,250);
	if(keyIsDown(LEFT_ARROW)){
v4 = img2;
}
if(keyIsDown(RIGHT_ARROW)){
v4 =img2 ;
}if(keyIsDown(UP_ARROW)){
v5 = img2;
}if(keyIsDown(DOWN_ARROW)){
v5 = img2;
}	
image(img2,v4,v5,200,200);
	image(img,v,v1,150,150);
	image(img1,v2,v3,100,100);
	image(img3,v6,v7,200,200);
v += speed1;
if(v >= 800 || v <= 0){
speed1 = speed1 *-1;
}
v1 += speed2;
if(v1 >= 500 || v1 <= 0){
speed2 = speed2 *-1;
}
v2 += speed3;
if(v2 >= 800 || v2 <= 0){
speed3 = speed3 *-1;
}
v3 += speed4;
if(v3 >= 500 || v3 <= 0){
speed4 = speed4 *-1;
}
v6 += speed5;
if(v6 >= 700 || v6 <= 0){
speed5 = speed5 *-1;
}
v7 += speed6;
if(v7 >= 400 || v7 <= 0){
speed6 = speed6 *-1;
}
	}












































