var beya_one = {
	x : 200,
	diameter : 50,
	ys : []
}
var beya_two = {
	x : 750,
	diameter : 50,
	ys : []
}
var mawe_one = {
	x : 100,
	y : 450,
	score : 0
}
var mawe_two = {
	x : 850,
	y : 450,
	score : 0
}

function setup(){
	createCanvas(1000,860);
}

function random_item(items){
	return items[Math.floor(Math.random()*items.length)];     
}

function draw(){
	background(255,0,0);
	
	//player one
	fill(255);
	for (var y = 100; y < height - 100; y+=70){
		ellipse(beya_one.x, y, beya_one.diameter, beya_one.diameter);
		beya_one.ys.push(y);
	}
	
	//player two
	fill(255);	
	for (var y = 100; y < height - 100; y+=70){
		ellipse(beya_two.x, y, beya_two.diameter, beya_two.diameter);
		beya_two.ys.push(y);
	}
	
	//rand = beya_two.ys[Math.floor(Math.random() * beya_two.ys.length)];
	
	// mawe ya player one
	fill(160,82,45);
	ellipse(mawe_one.x, mawe_one.y, 50, 50);
	
	// mawe y player two
	fill(160,82,45);
	ellipse(mawe_two.x, mawe_two.y, 50, 50);
	
	// Player one playing
	if (key === 'r'){
		mawe_one.x = beya_two.x;
		console.log(mawe_one.x);
		mawe_one.y = random_item(beya_two.ys);
		mawe_one.score += 1;
	}
	
	// going back to position
	if (key === 'b'){
		mawe_one.x = 100;
		mawe_one.y = 450;
	}

	// Player two playing
	if (key === 't'){
		mawe_two.x = beya_one.x;
		mawe_two.y = random_item(beya_one.ys);
		mawe_two.score += 1;
	}
	
	// going back to position 
	if (key === 'c'){
		mawe_two.x = 850;
		mawe_two.y = 450;
	}
	
	
	
	//create scores
	fill(0);	
	textSize(30);
	text('PLAYER 1: ' + mawe_one.score, 30,50 );
	
	//create scores
	fill(0);	
	textSize(30);
	text('PLAYER 2: ' + mawe_two.score, 600,50 );

	if (mawe_two.score > 50){
		background(90);
		fill(0);	
		textSize(30);
		text('GAME OVER Player 2 won!!!', 250,350 );
		textSize(20);
		text('Press CTRL + R to replay', 250,400 );
	} else if (mawe_one.score > 50 ){
		background(90);
		fill(0);	
		textSize(30);
		text('GAME OVER Player 1 won!!!', 250,350 );
		textSize(20);
		text('Press CTRL + R to replay', 250,400 );
	}
}
