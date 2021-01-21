
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Constraint=Matter.Constraint;

var score=0;

function preload(){
poly=loadImage("polygon.png");
defaultbg = loadImage("sprites/bg2.jpg");
    getbgimage();
}


function setup(){
    createCanvas(800,600);
    engine=Engine.create();
    world=engine.world;

ground=new Stand(400,580,800,20);
stand1=new Stand(300,400,150,10)
stand2=new Stand(600,300,150,10);

box1=new Block(300,390)
box2=new Block(270,390);
box3=new Block(330,390);

box4=new Block(300,350);


box5=new Block(600,290);
box6=new Block(570,290);
box7=new Block(630,290);

box8=new Block(600,250);

ball=Bodies.circle(200,350,30);
World.add(world,ball);

sling=new Slingshot(this.ball,{x:200,y:300})

}

function draw(){
 Engine.update(engine);
    
ground.display();


stand1.display();  
stand2.display();
fill("pink");
box1.display();
box2.display();
box3.display();

fill("red");
box4.display();
fill("green");
box5.display();
box6.display();
box7.display();
fill("white");
box8.display();

block1.getscore();
block2.getscore();
block3.getscore();
block4.getscore();
block5.getscore();
block6.getscore();
block7.getscore();



sling.display();

imageMode(CENTER);
image(poly,ball.position.x,ball.position.y,30,30)


}

function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    sling.fly();

}
function keyPressed(){
    if(keyCode===32){
        sling.attach(this.ball);
    }
}

async function getbgimage(){
    
    
    var r = await fetch ("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
var rj=await r.json();
console.log(rj);

var datetime=rj.datetime;
console.log(datetime);
 var hour = datetime.slice(11,13);
 console.log(hour);

 if(hour>=06&&hour<18){
     bg="sprites/bg.png"
 }
 else{
     bg="sprites/bg2.jpg";
 }

 backgroundImg=loadImage(bg);

}





































