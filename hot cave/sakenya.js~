var x=500;
var y=400;
var xmove=10;
var ymove=5;
var sidem=10;
var p1posx = 500;
var p1posy = 0;
var p2posx =500
var hit;
var xhit = 500;
var yhit = 50;
var xr=500;
var yr = 50;
var hitc;
var xj=800;
var yj=25;
var hitc2;
var p2dist;
var p2r;
var p3r; 
var p2xr = 650;
var p2yr = 750;
var p2xj = 800;
var p2yj = 750;
var p2posx =500;
var p2posy =750;
var Scorep1=0;
var Scorep2=0;
//var change= 0.9;


function setup(){
	createCanvas(1000,800);
	
	y = random(100,700);

}
function draw(){
	background(0,255,0);
	fill(55,255,250)
  ellipse(x,y,50,50);
  x= x+xmove;
	//y= y+ymove; 

//player one
	//hit0ne
	fill(0,130,220);
	rect(p1posx,p1posy,300,50);

	if(keyIsDown(LEFT_ARROW)){
		p1posx = p1posx - sidem
			xhit -= 5
		
	}
	if(p1posx<=0 || p1posx>=1000){
		sidem== 0;	
	  }
	
	if(keyIsDown(RIGHT_ARROW) ){
		p1posx = p1posx + sidem
			xhit += 5
		
	}
	//centrepos
	hit= dist(x,y,p1posx+150,p1posy+25); 
	if (hit <=50){
		xmove= xmove*-1;
		ymove= ymove*-1;
		Scorep1 +=2;
		
		
	}
	
	//player1 left
	hitc = dist(x,y,xr,yr);
	console.log(hitc);
	if (hitc <=50){
		xmove= xmove*-1;
		ymove= ymove*-1;
		Scorep1 +=2;
	
	}
	hitc2=dist(x,y,xj,yj);
  	if(hitc2<=40){
  		xmove= xmove*-1;
		ymove= ymove*-1;
		Scorep1 +=2;
   	}
 		

	
	fill('brown');
	textSize(30);
	text("Player 1 : " + Scorep2,20,50);

	




	//player two
	fill(150,0,205)
	rect(p2posx,p2posy,300,50);

	if(keyIsDown(65)){
		p2posx = p2posx - sidem
			xhit -= 5
	}
	if(keyIsDown(68)){
		p2posx = p2posx + sidem
			xhit += 5
	}
  
	//player two movement

	p2dist= dist(x,y,p2posx+150,p2posy); 
	if (p2dist <=30){
			xmove= xmove*-1;
			ymove= ymove*-1;
			Scorep2 +=2;
			
	}

	p2r = dist(x,y,p2xr,p2yr);
	if (p2r <=50){
		xmove= xmove*-1;
		ymove= ymove*-1;
		Scorep2 +=2;
		
	}
	p3r=dist(x,y,p2xj,p2yj);
  	if(p3r<=50){
  		xmove= xmove*-1;
		ymove= ymove*-1;
		Scorep2 +=2;
   	}
	fill('black');
	textSize(30);
	text("Player 2 : " + Scorep1,20,120);

	
	
 if(x>=1000||x<=0){
	xmove= xmove*-1;		
	}
	y= y+ymove;
if(y>=800||y<=0){
	ymove= ymove*-1;
	}

	if (Scorep1 >=20 ){
		background(0);
		//x=5000;
		//clear();
		Scorep2 =0;
		textSize(30)		
		fill("white");
		text("Player One Wins with "+ Scorep1 ,400,400);
	}
	if (Scorep2 >=20){
		//clear();
		background(0);
		//x=5000;
		Scorep1=0;
		textSize(30)	
		fill("white");
		text("Player Two Wins with "+ Scorep2,400,400);
	}

}




