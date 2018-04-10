//ball position
var x = 100;
var y = 30;
var gravity = 5;
var circleSpeed = 10;
// the paddles that blocks the ball from going through
var paddle = {
	x : 70,
	y : 100,
	upana : 150,
	unono : 20	
}
var paddle2 = {
	x : 150,
	y : 180,
	upana : 150,
	unono : 20
}
	
var paddle3 = {
	x : 250,
	y : 260,
	upana : 150,
	unono : 20,
	 	
}

var paddle4 = {
	x : 330,
	y : 340,
	upana : 150,
	unono : 20,
}

var paddle5 = {
	x : 400,
	y : 430,
	upana : 150,
	unono : 20,
}

var paddle6 = {
	x : 480,
	y : 500,
	upana : 150,
	unono : 20,
}

var paddle7 = {
	x : 560,
	y : 570,
	upana : 150,
	unono : 20,
}
var paddle8 = {
	x : 615,
	y : 650,
	upana : 150,
	unono : 20,
	
}
var paddle9 = {
	x : 700,
	y : 750,
	upana : 150,
	unono : 20,
}
var paddle10 = {
	x : 620,
	y : 850,
	upana : 150,
	unono : 20,
}

function setup () {
	createCanvas (900,1100)

}
function draw () {
	background (255,0,255);
	
	//The ball
	fill (250,250,0);
	ellipse (x, y,50,50);
	
	//move the ball with keys
	//move left
	if (keyIsDown(LEFT_ARROW)){
		x -=circleSpeed;
		
		//vx x mc= circleSpeed ;
		
	}

	//move right
	if (keyIsDown(RIGHT_ARROW)){
		
		x +=circleSpeed;
	}
		y += gravity;		

	// the paddle	
	fill (0)
	rect (paddle.x,paddle.y,paddle.upana,paddle.unono);
	
	//making the paddle block the ball
	//if (x > paddle.x && x < paddle.x + 150 && y < paddle.y - 25 && y > paddle.y - 28){
	var checkgravity = dist(x,y,paddle.x,paddle.y);
	
	var pause = 40;
	if (checkGravity <= pause ){
			//background(0);
			gravity =0;
				}
			
			if (checkGravity >= pause){
				gravity = 5;
				//background(0);
			}
			
				
	// the paddle	
	fill (0)
	rect (paddle2.x, paddle2.y,paddle2.upana,paddle2.unono);

	// making the paddle block the ball
	//if (x > paddle2.x && x < paddle2.x + 150 && y < paddle2.y - 25 && y > paddle2.y - 28){
		//gravity = 0;
		//background(90);
		
//}	
	 //else {
		//gravity = 2;
	//}
	
	// the paddle
	noStroke();	
	fill (250,250,250)
	rect (paddle3.x, paddle3.y,paddle3.upana,paddle3.unono);

	// making the paddle block the ball
	//if (x > paddle3.x && x < paddle3.x + 150 && y < paddle3.y - 25 && y > paddle3.y - 28){
		//gravity = 0;
		//background(90);
		
//}
	var checkBlock = dist(x,y,paddle3.x,paddle3.y);
	if (checkBlock <= 60){
		background(0);	
		textSize(50);
		text ("You Loose", width/2,height/2);	
		gravity = 0;
			}
				
	
	// the paddle	
	fill (0)
	rect (paddle4.x, paddle4.y,paddle4.upana,paddle4.unono);

	// making the paddle block the ball
	if (x > paddle4.x && x < paddle4.x + 150 && y < paddle4.y - 25 && y > paddle4.y - 28){
		gravity = 0;
		//background(90);
		
}	
	
	
	// the paddle	
	fill (250,250,250)
	rect (paddle5.x, paddle5.y,paddle5.upana,paddle5.unono);

	// making the paddle block the ball
	if (x > paddle5.x && x < paddle5.x + 150 && y < paddle5.y - 25 && y > paddle5.y - 28){
		gravity = 0;
		//background(90);
		
}	
	
// the paddle	
	fill (0)
	rect (paddle6.x, paddle6.y,paddle6.upana,paddle6.unono);
	
	//making the paddle block the ball
	if (x > paddle6.x && x < paddle6.x + 150 && y < paddle6.y - 25 && y > paddle6.y - 28){
		gravity = 0;
		//background(90);
		
}	
	
	
	// the paddle	
	fill (250,250,250)
	rect (paddle7.x, paddle7.y,paddle7.upana,paddle7.unono);
	
	//making the paddle block the ball
	if (x > paddle7.x && x < paddle7.x + 150 && y < paddle7.y - 25 && y > paddle7.y - 28){
		gravity = 0;
		//background(90);
		
}	
	
		// the paddle	
	fill (250,250,250)
	rect (paddle8.x, paddle8.y,paddle8.upana,paddle8.unono);
	
	//making the paddle block the ball
	if (x > paddle8.x && x < paddle8.x + 150 && y < paddle8.y - 25 && y > paddle8.y - 28){
		gravity = 0;
		//background(90);
		
}	
	
	
		// the paddle	
	fill (0)
	rect (paddle9.x, paddle9.y,paddle9.upana,paddle9.unono);
	
	//making the paddle block the ball
	if (x > paddle9.x && x < paddle9.x + 100 && y < paddle9.y - 25 && y > paddle.y - 28){
		gravity = 0;
		//background(90);
		
}	
	
		// the paddle	
	fill (0)
	rect (paddle10.x, paddle10.y,paddle10.upana,paddle10.unono);
	
	//making the paddle block the ball
	if (x > paddle10.x && x < paddle10.x + 150 && y < paddle10.y - 25 && y > paddle10.y - 28){
		gravity = 0;
		//fill(0);
		
		background(90);
		textSize(50);
		text ("You Win", width/2,height/2);		
}	

	
	//if the ball to be affected by gravity


}

