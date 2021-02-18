var database;
var gameState=0
var playercount
var player,form,game
var playerdetails
function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  game=new Game()
    game.readstate()
    game.start()
  
}

function draw(){
  background("white");
  
    drawSprites();
  
}
