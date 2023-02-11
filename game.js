//
//
// var buttonColours = ["red", "blue", "green", "yellow"];
// var gamePattern = [];
// var userClickedPattern= [];
//
//
//
// function nextSequence() {
//   var randomNumber = Math.floor(Math.random() * 4);
//   var randomChosenColour = buttonColours[randomNumber];
//   gamePattern.push(randomChosenColour);
// $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
// var audio= new Audio("sounds/"+randomChosenColour+".mp3")
// audio.play();
//
// for (var i = 0; i <= gamePattern.length; i++) {
//   var level = $("h1").html("Level "+(i))
// }
// }
//
//
// $(".btn").on("click", function(){
//
//   var userChosenColour= $(this).attr("id");
//   userClickedPattern.push(userChosenColour);
//   console.log(userClickedPattern);
// playSound(userChosenColour);
// animatePress(userChosenColour);
// });
//
//
// function playSound(name){
//
//   var audio= new Audio("sounds/"+name+".mp3")
//   audio.play();
// }
//
// function animatePress(currentColour){
//   $("#"+currentColour).addClass("pressed");
//   setTimeout(function() {
//    $("#"+currentColour).removeClass("pressed");
// }, 100);
// }
//
// $(document).on("keypress",function(){
//   nextSequence();
//
// })
// if(gamePattern==userClickedPattern){
//   nextSequence();
//   console.log(gamePattern);
//   console.log(userClickedPattern);
// }

var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;

var level = 0;

$(document).keypress(function() {
  if (!started) {

    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
});

function nextSequence() {

userClickedPattern= []
  level++;

  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel){
  if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){
    console.log("success");
  }

  if(userClickedPattern.length===gamePattern.length){
    setTimeout(function () {
    nextSequence();
    }, 1000);
  }

  else{console.log("wrong");
  playSound("wrong");

  $("body").addClass("game-over");
  setTimeout(function () {
    $("body").removeClass("game-over");
  }, 200);
  $("h1").html("Game Over, Press Any Key to Restart");
  startOver();
};
}

function startOver(){
  level= 0;
  gamePattern=[];
  started= false;
}
