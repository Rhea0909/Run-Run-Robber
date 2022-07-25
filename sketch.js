var canvas 
var backgroundImage,robberImg,roadImg, wallImg
var moneyImage, lifeImage
var police1Image, police2Image
var robber,coins,police1, police2, wall 

function preload(){
backgroundImage = loadImage("./https:/town 1.jpeg")




}






function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(backgroundImage);  
  drawSprites();
}