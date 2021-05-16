var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;
var background1 = 'rgb(255, 102, 255)';
var question, contestant, quiz;


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  quiz.getState();

  if(gameState===0){
    
    background1 = "pink";

  }
  
  

  background(background1);
  console.log(background1);
  if(contestantCount === 2){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();    
    quiz.play();
    
  }
}
