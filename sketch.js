var database
var gamestate=0
var playercount=0
var allPlayers;
// global varibles
var player, game, form

// variables

var car1, car2, car3, car4
var cars 

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth-20,displayHeight-30);
  
  game= new Game()
  game.getstate()
  game.start()  
  

}

function draw(){
  background("white");
  if(playercount==4){
  game.updateState(1)
  }
  if(gamestate===1){
    clear()
    game.play()
  
  }
}
