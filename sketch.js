const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, platform, bg = true;
var boxa1, boxa2, boxa3, boxa4, boxa5, boxa6, boxa7;
var boxb1, boxb2, boxb3, boxb4, boxb5;
var boxc1, boxc2, boxc3;
var boxd1;
var polygon, polyimg, chain;

function preload() {
    polyimg = loadImage("polygon.png");
}

function setup() {
    var canvas = createCanvas(1280, 574);
    engine = Engine.create();
    world = engine.world;
    Get_Time();
    ground = new Ground(width/2, height-15, width, 30, outline(bg));
    platform = new Ground(900, height-145, 300, 20, outline(!bg));
    boxa1 = new Box(812.5, height-175, 25, 50, "blue");
    boxa2 = new Box(837.5, height-175, 25, 50, "blue");
    boxa3 = new Box(862.5, height-175, 25, 50, "blue");
    boxa4 = new Box(887.5, height-175, 25, 50, "blue");
    boxa5 = new Box(912.5, height-175, 25, 50, "blue");
    boxa6 = new Box(937.5, height-175, 25, 50, "blue");
    boxa7 = new Box(962.5, height-175, 25, 50, "blue");
    boxb1 = new Box(837.5, height-200, 25, 50, "red");
    boxb2 = new Box(862.5, height-200, 25, 50, "red");
    boxb3 = new Box(887.5, height-200, 25, 50, "red");
    boxb4 = new Box(912.5, height-200, 25, 50, "red");
    boxb5 = new Box(937.5, height-200, 25, 50, "red");
    boxc1 = new Box(862.5, height-225, 25, 50, "green");
    boxc2 = new Box(887.5, height-225, 25, 50, "green");
    boxc3 = new Box(912.5, height-225, 25, 50, "green");
    boxd1 = new Box(887.5, height-250, 25, 50, "purple");
    polygon = Bodies.rectangle(200, 150, 50, 50, {'restitution': 0.5, 'friction': 1.0, 'density': 15});
    World.add(world, polygon);
    chain = new Slingshot(polygon, {'x': 225, 'y': 125});
}

function draw() {
    if(bg) {
        background(255);
    } else {
        background(0);
    }
    Engine.update(engine);
    boxa1.display(outline(bg));
    boxa2.display(outline(bg));
    boxa3.display(outline(bg));
    boxa4.display(outline(bg));
    boxa5.display(outline(bg));
    boxa6.display(outline(bg));
    boxa7.display(outline(bg));
    boxb1.display(outline(bg));
    boxb2.display(outline(bg));
    boxb3.display(outline(bg));
    boxb4.display(outline(bg));
    boxb5.display(outline(bg));
    boxc1.display(outline(bg));
    boxc2.display(outline(bg));
    boxc3.display(outline(bg));
    boxd1.display(outline(bg));
    ground.display();
    platform.display();
    chain.display();
    push();
    translate(polygon.position.x, polygon.position.y);
    rotate(polygon.angle);
    imageMode(CENTER);
    image(polyimg, 0, 0, 50, 50);
    pop();
}

function mouseDragged() {
    Matter.Body.setPosition(polygon, {x: mouseX, y: mouseY});
}

function mouseReleased() {
    chain.fly();
}

function keyPressed() {
    if(keyCode == 32) {
        Matter.Body.setPosition(polygon, {x: 275, y: 150});
        chain.attach(polygon);
    }
}

function outline(flag) {
    if(flag) {
        return "black";
    } else {
        return "white";
    }
}

async function Get_Time() {
    var resp = await fetch("http://worldclockapi.com/api/json/cst/now");//http://worldtimeapi.org/api/timezone/Asia/kolkata//
    var info = await resp.json();
    var time = ((info.currentDateTime.slice(11,13)*100) + (int) (info.currentDateTime.slice(14,16)));//datetime//
    console.log(time);
    if(time >= 600 && time < 1800) {
        bg = true;
    } else {
        bg = false;
    }
}