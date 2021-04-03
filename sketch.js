const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

//OBJECTS IN THE GAME
var bg, hill, castle, castle1, castle2;
var slingshot, connector;
var ground, platform1;
var enemy1;

var gameState = "onSling";

var rocks = [];
var rock;

function preload() {
	bg = loadImage("images/bg.jpg");
	princeImg = loadImage("images/prince.png");

	planeImg = loadImage("images/plane.png");

	//LOAD THE BOMB IMAGES AND ANIMATIONS
	bombImg = loadImage("images/bomb/bomb.png");
	bombExplosion = loadImage("images/bomb/bomb1.png", "images/bomb/bomb2.png", "images/bomb/bomb3.png",
		"images/bomb/bomb4.png", "images/bomb/bomb5.png", "images/bomb/bomb6.png", "images/bomb/bomb7.png", "images/bomb/bomb8.png");
}


function setup() {
	var canvas = createCanvas(1200, 500);
	engine = Engine.create();
	world = engine.world;


	//PLATFORMS//
	platform1 = new Platform(900, 300);

	//ENEMIES//
	enemy1 = new Enemy(890, 250);

	rock1 = new Rock(552, 200);
	rocks.push(rock1);

	rock2 = new Rock(550, 50);
    rocks.push(rock2);

	
	

	ground = new Ground(600, 480, 1200, 15);
	hill = new Hill(575, 445);
	castle = new Castle();
	castle1 = new Castle2(525, 354);
	castle2 = new Castle2(625, 354);
	slingshot = new SlingShot(rocks[0].body, { x: 590, y: 190 });
	
	console.log(rocks[1]);

	if(plane.x === 580){
		spawnBomb();
	}

	

	
	//CREATE THE GROUPS//
	planeGroup = new Group();
    bombGroup = new Group();
}


function draw() {
	background(bg);

	//REPLACING ROCK//
	if(gameState === "launched" && rock1.body.position.x > 600 || rock1.body.position.x < 400){
		rock2.display();
		slingshot1 = new SlingShot(rock2.body, { x: 590, y: 190 });
		slingshot.attach(rock2.body)
	}

	if(rock1.body.velocityX < 2 && gameState === "launched"){
		rocks.splice(0, 1);
	}

	console.log(rocks);

	

	//DISPLAYING THE OBJECTS//
	slingshot.display();
	enemy1.display();
	ground.display();
	rock1.display();
	
	hill.display();
	castle.display()
	platform1.display();


	strokeWeight(4);
	stroke("black")
	line(300, 300, 850, 300);

	spawnPlane();
	drawSprites();
	Engine.update(engine);
}



function mouseDragged() {
	Matter.Body.setPosition(rocks[0].body, { x: mouseX, y: mouseY });
	Matter.Body.setPosition(rocks[1].body, { x: mouseX, y: mouseY });
}



function mouseReleased() {
	slingshot.fly();
	gameState = "launched";
}


function spawnBomb(){
		var bomb = createSprite(plane.x, plane.y, 100, 50);
		bomb.addImage(bombImg);
		bomb.velocityY = 3;
		bomb.scale = 0.05;
		bomb.depth < plane.depth;
		bombGroup.add(bomb);
}

function spawnPlane(){
	if (frameCount % 100 === 0) {
		var plane = createSprite(width + 50, 50, 100, 50);
		plane.y = Math.round(random(30, 90));
		plane.addImage(planeImg);
		plane.velocityX = -3;
		plane.scale = 0.2;
		plane.lifetime = 450;
		planeGroup.add(plane);
	}
}


