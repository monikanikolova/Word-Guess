var doc = function (id) {
   return document.getElementById(id); 
}

//Declare variables
var words = ["SCORPIONS", "DEEP PURPLE", "PINK FLOYD", "BLACK SABBATH"];
var number = Math.floor(Math.random()*4);
var answer = words[number];
var myLength = answer.length;
var display = [myLength];
var win = myLength; 
var letters = answer.split('');
var triesLeft = 10;
var result = "";
var userLetters = "";



console.log(answer);
//Set up function
var setup = function() {
    for (i = 0; i < answer.length; i++){
        display[i] = "_ ";
        result = result + display;
    }
    document.getElementById("game").innerHTML = result;
    result = "";
}
//Execute it
window.onload = function(){
    setup();
} 

var play = function() {
    result = "";
    document.onkeyup=userLetters;
    console.log(userLetters);
    

    for (var b = 0; b < answer.length; b++){
        console.log(letters[b]);
        if (userLetters.toLocaleUpperCase() === letters[b]) {
            display[b] = userLetters.toUpperCase();
            win--;
        }
        result = result + display[b] + " ";
        }
        document.getElementById("game").innerHTML = result;
        result = "";
        triesLeft--;
        if (win < 1) {
            document.getElementById("guesses").innerHTML = "You Win!";
        }
        else if (triesLeft < 1) {
            document.getElementById("guesses"),innerHTML = "You lose!";

        }
        else {
            document.getElementById("guesses").innerHTML = "You have " + triesLeft + " guesses left";
        }

}
window.onload = function () {
    play();
}