var x = 30; 
var y = 670;
var speed = 7;
var xpos = 20;
var ypos = 700 - 18;
var gravity = 0.9;
var ballSpeed =30;
var bunt;
var bunt;
var bunt1;
var bunt2;
var move=1;
var chini=20;
var up= 50;


function setup(){
  	createCanvas(1000,700);
	
}
function draw(){
	background(0);
	 bunt = false;
	bunt1 = false;
	bunt2 = false;

	fill(255,0,0);
	ellipse(xpos,ypos,35,35);
	xpos = constrain(xpos,0,width-30);
	ypos = constrain(ypos,0,height-30);
	
	
	//xpos+=move;
	fill(0,155,155);
	stroke(255);
	line(x+85,y-70,x+85+60,y-70);
	rect(x+70,y-170,12,500);
	//#2	
	rect(x+85,y-70,60,12);	
	triangle(x+220,y+30,x+240,y,x+260,y+30);
	rect(x+270,y-70,180,580);
	triangle(x+270,y-70,x+290,y-110,x+310,y-70);
	triangle( x+410,y-70,x+430,y-110,x+450,y-70);
	//#4	
	rect(x+450,y-50,60,12);
	//#5	
	rect(x+520,y-170,60,12);
	rect(x+620,y-100,60,12);
	triangle(x+520,y+30,x+540,y,x+560,y+30);
	triangle(x+560,y+30,x+580,y,x+600,y+30);
	triangle(x+600,y+30,x+620,y,x+640,y+30);
	triangle(x+640,y+30,x+660,y,x+680,y+30);
	rect(x+770,y-370,12,670);
	rect(x+700,y-270,60,12);
	
	ypos+=chini;
	console.log(chini)

	bunt = collideRectCircle(x+70,y-170,12,500,xpos,ypos,35,35);
	bunt1 = collideLineCircle(x+85,y-70,x+85+60,y-70,xpos,ypos,35,35)
	bunt2 =collidePointTriangle(xpos,ypos,x+220,y+30,x+240,y,x+260,y+30)
	
		
	if(keyIsDown(UP_ARROW)){
	ypos-= up;

}

   //ypos +=ballSpeed;

	 if (keyIsDown(RIGHT_ARROW)){
		//move = 1;
		xpos += move*10;
	}
	if (keyIsDown(UP_ARROW) ){
		ypos -= ballSpeed;
	}
	
	
	if (keyIsDown(UP_ARROW) && keyIsDown(RIGHT_ARROW)){
		move=1;		
		ypos -= ballSpeed;
		xpos += move*5;
	}
	
	if(bunt == true){
			chini=0;
			move=0;
	}else{
		chini =20;
		move=1	
	}
	if(bunt1 == true){
			chini =0;
			move=0;
	}
	if(bunt2 == true){
			background(255,0,150);
			
			
			
	}


	console.log(bunt2);
	

	
}




 

