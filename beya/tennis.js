var k = 300;
var l = 700;
var y = [60,120,180,240,300,360,420,480];
var x = 700;
var z = [60,120,180,240,300,360,420,480];
var w =300;
var shoot=20;
var stonex =220;
var stoney =26
var hit;
var stone;
var i;
var ix=40;
var iy=100;






function setup(){
	createCanvas(1000,800);	
	
	stone = loadImage("stone.svg");
	 i=loadImage("6.png");
	}
function draw(){
	frameRate(15);
	background(255,0,0);
	fill (0);

	/*for (var ball = 60; ball<=height-100; ball +=90){
		ellipse(k,ball,50,50);
	}
		for (var ball = 60; ball<=height-100; ball +=90){
			ellipse(l,ball,50,50);
		}*/
		//rect (800,50,100,500);
		//fill(0, 255, 0);rect (100,50,100,500);rect (100,50,100,500);
		
		//rect (stonex,stoney,30,30);
		fill(255, 255, 255);
		ellipse(x,y[0],50,50);
		ellipse(x,y[1],50,50);
		ellipse(x,y[2],50,50);
		ellipse(x,y[3],50,50);
		ellipse(x,y[4],50,50);
		ellipse(x,y[5],50,50);
		ellipse(x,y[6],50,50);
		
		ellipse(w,y[0],50,50);
		ellipse(w,y[1],50,50);
		ellipse(w,y[2],50,50);
		ellipse(w,y[3],50,50);
		ellipse(w,y[4],50,50);
		ellipse(w,y[5],50,50);
		ellipse(w,y[6],50,50);
		
		
		
		
		
		
		
		
		
		
		
		
		
	image(stone,stonex,stoney,50,50);
	image(i,ix,iy,200,00);


	
	hit= dist(stonex,stoney,x,y[0]);
	if (hit <= 50){
			y[0]+=4;
		
	}		
	console.log(hit);	
	if(keyIsDown(RIGHT_ARROW)){
	   stonex = mouseX-50;
	   stoney =mouseY-50;
	 
	
	}

	
}

