class Quiz {
  constructor() { }

  getState() {
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    })

  }

  update(state) {
    database.ref('/').update({
      gameState: state
    });
  }

  async start() {
    if (gameState === 0) {
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if (contestantCountRef.exists()) {
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play() {
    //write code here to hide question elements

    question.button.hide();
    question.input1.hide();
    question.input2.hide();
    question.title.hide();

    background1 = "yellow";
    background(background1);
    //this.getState();
    //write code to change the background color here
    
  
  
    //write code to show a heading for showing the result of Quiz

    var heading = createElement('h1');
    heading.position(200, 30);
    heading.html("Results Of Quiz!");


    //call getContestantInfo( ) here

    Contestant.getPlayerInfo();
    //write condition to check if contestantInfor is not undefined

    //write code to add a note here

    if (allContestants !== undefined) {
      fill("blue");
      textSize(20);
      text("Note:Contestants who answered correct are highlighted in green Color!", 130, 230);
    }

    //write code to highlight contest who answered correctly

    var yoffset = 300;
    for (var plr in allContestants) {

      var correctAns = "2";

      if (correctAns === allContestants[plr].answer) {
        fill("green");
      }
      else {
        fill("red");
      }
      
      yoffset = yoffset+20; 
      text(allContestants[plr].name+" :"+allContestants[plr].answer, 200, yoffset);
    }
  }
}
