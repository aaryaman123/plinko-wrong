const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var ground;
var particles = [];
var divisions = [];
var plinkos = [];
var divisionHeight=300;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
}

function draw() {
  background(255,255,255);  
  
  for(var k=0; k<=width; k=k=80){
    divisions.push(new Division(k,height=divisionHeight/2,10,divisionHeight));
  }
  divisions.dispay();
}