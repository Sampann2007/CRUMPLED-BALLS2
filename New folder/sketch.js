const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var backgroundImg,platform;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    log1 = new Log(810,260,300, PI/2);
   

    bird = new PaperBall(178,58);


    
    

}

function draw(){
    background(backgroundImg);
    Engine.update(engine);    
    ground.display();
    log1.display();
    bird.display();
    platform.display();
}
function keyPressed(){
    if(keyCode===UP_ARROW){
        Matter.Body.applyForce(bird.body,bird.body.position,{x:85,y:-85});
    }
    
}