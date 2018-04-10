var x = [];
var y= [];
var walk =10;

var xPos, yPos, xaxi , yaxi;

var movement = 10;

var score = 0;

var move =10;
var move2 
var speed = 10;
var a = [];
var b = [];
var rectMove1 =9;
var rectMove2 =10;
var rectX1 =140;
var rectY1 = 50;
var rectX2 =200;
var rectY2 =400;
var hit;
var speed1=10;
var speed2=10;
var image1;
function setup (){
	createCanvas(window.innerWidth,window.innerHeight);
	x[0] = random(0,1000);
	y[0] = random(0,800);
	x[1] = random(0,1000);
	y[1] = random(0,800);
	move2 =random(8,10);
	//x[2] = random(0,1000);
	//y[2] = random(0,800);
	//x[3] = random(0,1000);
	//y[3] = random(0,800);
	bg2 = loadImage("ndunge3.png");
	ball1 = loadImage("ball1.png");
	
	xPos = random(0, width);
	yPos = height;
	xaxi = random(0, width);
	yaxi = height;
}
  
function draw(){
  
  var mousePosX = mouseX;
  var mousePosY = mouseY;
  
	frameRate(22);
	background(255,150,255);
	fill(207,219,140);

	image(ball1,x[0],y[0]);
	image(ball1,x[1],y[1]);
	ellipse( x[3],y[3],80,80);
	
	
   	x[2] += move;
   	x[2] -= move2;
	x[3] += move;
	//Ball One
	x[0] += move;
	if(x[0] >= 1000 || x[0] <= 0){
		move *= -1
	}
	y[0] -= speed;
	if( y[0] >= 800 || y[0] <= 0){
		speed *= -1
	}
		
	 var hitBall1 =dist(mouseX,mouseY,x[0]+10,y[0]+100);
	if (hitBall1 <= 40){
		x[0] =-1100;
		y[0] =-1000;
	  background==loadImage("ndunge3.png");
	  score+=1;
		}
		
	
	//Ball Two
	x[1] -= move2;
	if (x[1] >= 1000 || x[1] <= 1){
		move2 *= -1
	}
	y[1] -= speed2;
	if(y[1] >= 800 || y[1]<= 0){
		speed2 = speed2*-1;
	}
	
	 var hitBall2 =dist(mouseX,mouseY,x[1]+10,y[1]+100);
	if (hitBall2 <= 30){
		x[1] =-1100;
		y[1] =-1000;
		score+=1;
	 
		}
	
	
	
	
	
	if (x[3] >= 1000 || x[3] <= 1){
		move *= -1
	}
	y[3] -= speed1;
	
	if(y[3] >= 800 || y[3]<= 0){
		speed = speed *-1;
		
	 
		
		 
	 
		 
		
		
	}
	
	
	
	fill(150,150,150)
     rect(rectX1,rectY1,140,50);
     rectX1 +=rectMove1;
     	
    if (rectX1 >= 1000 || rectX1 <=0){
    	rectMove1*=-1;
    	}
     fill(150,150,150);
     rect(rectX2,rectY2,200,20);
     rectX2 +=rectMove2;
     if (rectX2 >= 1000 || rectX2 <=0){
    		rectMove2*=-1;
    	}


var detectBlock = dist(rectX1,rectY1,x[1],y[1]);
	
	if (detectBlock <= 35){
		background(bg2);
		rectMove2 = 0;
		rectMove1 = 0;
		
	}
	
var detectSmall = dist(rectX2,rectY2,x[1],y[1]);

	
	if (detectSmall <= 50){
		background(bg2);
		
	}
	var moveb = 10;
fill(255,0,0);
ellipse(xaxi,yaxi,80,80);

yaxi =yaxi - movement;

fill(0,255,0);
ellipse(xPos,yPos,80,80);

yPos =yPos - movement;

  var di = dist(mousePosX, mousePosY, xPos, yPos);  
  
  if(di <= 12){
  		xPos =-1100;
		yPos =-1000;
		score+=1;
  }
  
    var di = dist(mousePosX, mousePosY, xaxi, yaxi);
    
      if(di <= 12){
  	xaxi =-1100;
		yaxi =-1000;
		score+=1;
  }
  
	if(yPos <= 0){
	background(255, 0, 0);
		fill(0);
		textSize(30);
		text("Game over", width/2, height/2);
		movement=0;
		speed=0;
		rectMove1 =0;
		rectMove2 =0;
		speed1=0;
		speed2=0;
		move=0;
		move2=0;
		
		text("your score is: "+ score, width/2, height/2+100); 
	}
	
	text(score, 10, 10);
	console.log(yPos);
}

	
       

    
	
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
   
     
     
        
          
          
   
  
  
  
  
  
  
  
  
         
  
         
        
        
         
         
         
         
         
         
         
       
     
         
         
         
         
     
     
      
       
	
