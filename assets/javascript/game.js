//Declare variables
var words = ["SCORPIONS", "DEEP PURPLE", "PINK FLOYD", "BLACK SABBATH"];
var number = Math.floor(Math.random() * words.length);
var answer = words[number];
var myLength = answer.length;
var display = [];
var win = myLength;
var letters = answer.split('');
var triesLeft = 10;
var result = "";
var userLetters = "";
var guessedLetters = [];
var gameOver = false;

//Set up function
var setup = function () {
  for (i = 0; i < myLength; i++) {
    if (answer[i] !== " ") {
      display.push("_");
    } else {
      display.push(" ");
      win--;
    }

    result = display;
  }

  displayOnDom(result);
}
//Execute it
window.onload = function () {
  setup();
}

function displayOnDom(thingToDisplay) {
  document.getElementById("game").innerHTML = thingToDisplay.join(' ');
}

document.onkeyup = function (event) {
  if (!gameOver) {

    var userLetters = event.key.toUpperCase();


    if (guessedLetters.indexOf(userLetters) === -1 && letters.indexOf(userLetters) !== -1) {
      for (var i = 0; i < answer.length; i++) {
        if (userLetters === letters[i]) {
          display[i] = userLetters;
          displayOnDom(display);
          win--;
          guessedLetters.push(userLetters);

        }
      }
    } else {
      triesLeft--;
    }
    if (win < 1) {
      document.getElementById("guesses").innerHTML = "You Win!";
      gameOver = true;
    } else if (triesLeft < 1) {
      document.getElementById("guesses").innerHTML = "You lose!";
      gameOver = true;
    } else {
      document.getElementById("guesses").innerHTML = "You have " + triesLeft + " guesses left";
    }

  }
}



