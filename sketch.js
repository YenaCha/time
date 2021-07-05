const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    background("red")
    image (bg,0,0,1200,700)


    Engine.update(engine);

    var a
    var b

    if (n<13){
        a = n
        b = "AM"
    }
    else{
        a = n-12
        b = "PM"
    }

    // write code to display time in correct format here
    stroke ("black")
    textSize(25)
    text ("Time: "+a+b , 100,100)

}
var n
function getBackgroundImg(){
    
    var d = new Date();
    n = d.getHours();
    console.log(n)
    if (n >= 4 && n<6){
        bg = loadImage("sunrise1.png")
    }
    if (n >= 6 && n<8){
        bg = loadImage("sunrise2.png")
    }
    if (n >= 8 && n<10){
        bg = loadImage("sunrise3.png")
    }
    if (n >= 10 && n<12){
        bg = loadImage("sunrise4.png")
    }
    if (n >= 12 && n<14){
        bg = loadImage("sunrise5.png")
    }
    if (n >= 14 && n<16){
        bg = loadImage("sunrise6.png")
    }
    if (n >= 16 && n<18){
        bg = loadImage("sunset7.png")
    }
    if (n >= 18 && n<20){
        bg = loadImage("sunset8.png")
    }
    if (n >= 20 && n<22){
        bg = loadImage("sunset9.png")
    }
    if (n >= 22 && n<0){
        bg = loadImage("sunset10.png")
    }
    if (n >= 0 && n<2){
        bg = loadImage("sunset11.png")
    }
    else{
      bg = loadImage("sunset12.png")
    }
    // write code to fetch time from API

    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here

}
