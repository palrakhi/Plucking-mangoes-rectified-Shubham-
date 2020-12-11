
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var slingShot;

function preload()
{
	boyImg = loadImage("boy.png");	//sprites folder is not here. Only give file name
	treeImg = loadImage("tree.png");
}

function setup() {
	createCanvas(1000, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(500, 690, 1000, 20);

	//Create the Bodies Here.
	stone = new Stone(125, 500);
	// stone.scale = 2;

	 //tree = new Tree(700, 400, 500, 570);
	// tree.scale = 5	

	mango1 = new Mango(550,300, 20);
	mango2 = new Mango(600, 350, 20);
	mango3 = new Mango(700, 270, 20);
	mango4 = new Mango(650, 210, 20);
	mango5 = new Mango(750, 210, 20);
	mango6 = new Mango(800, 300, 20);

	slingShot = new Slingshot(stone.body, {x:125, y: 500});

	tree = createSprite(700, 400);
	tree.scale = 0.45;
	tree.addImage(treeImg);

	boy = createSprite(200, 585);
	boy.scale = 0.14;
	boy.addImage(boyImg);

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background("white");
	
	// tree.display();
	ground.display();
	

	slingShot.display();

	//image(treeImg, 420, 110, 500, 600);
	

	detectCollison(stone, mango1);
	detectCollison(stone, mango2);
	detectCollison(stone, mango3);
	detectCollison(stone, mango4);
	detectCollison(stone, mango5);

	drawSprites();
	
	stone.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
 
}

function mouseDragged(){
    Body.setPosition(stone.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
	if (keyCode === 32) {
		Matter.Body.setPosition(stone.body, {x:125, y: 500});
		slingShot.attach(stone.body);
	}
}

function detectCollison(lstone, lmango){
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;
	
	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)	;
	if(distance <= lmango.radius + lstone.radius){
		Matter.Body.setStatic(lmango.body, false);
	}
}

