var doc = function (id) {
    return document.getElementById(id);
}

//Declare variables
var words = ["SCORPIONS", "DEEP PURPLE", "PINK FLOYD", "BLACK SABBATH"];
var number = Math.floor(Math.random() * words.length);
var answer = words[number];
var myLength = answer.length;
var display = "";
var win = myLength;
var letters = answer.split('');
var triesLeft = 10;
var result = "";
var userLetters = "";



console.log(answer);
//Set up function
var setup = function () {
    for (i = 0; i < myLength; i++) {
        if (answer[i] !== " ") {
            display += "_ ";
        } else {
            display += " ";
        }

        result = display;
    }

    document.getElementById("game").innerHTML = result;
}
//Execute it
window.onload = function () {
    setup();
}


document.onkeyup = function (event) {
        var userLetters = event.key.toUpperCase;
        console.log(userLetters);


        for (var i = 0; i < answer.length; i++) {
            console.log(letters[i]);
            if (userLetters === letters[i]) {
                display[i] = userLetters;
                win--;
            }
            result = display[i] + " ";
        }
        document.getElementById("game").innerHTML = result;
        result = "";
        triesLeft--;
        if (win < 1) {
            document.getElementById("guesses").innerHTML = "You Win!";
        }
        else if (triesLeft < 1) {
            document.getElementById("guesses"), innerHTML = "You lose!";

        }
        else {
            document.getElementById("guesses").innerHTML = "You have " + triesLeft + " guesses left";
        }

    }
    
    

