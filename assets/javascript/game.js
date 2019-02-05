var doc = function (id) {
   return document.getElementById(id); 
}

//Declare variables
var words = ["SCORPIONS", "DEEP PURPLE", "PINK FLOYD", "BLACK SABBATH"];
var number = Math.floor(Math.random()*4);
var answer = words[number];
var myLength = answer.length;
var display = [myLength];
var letters = answer.split('');
var triesLeft = 10;
var result = "";
var userLetters = "";



console.log(answer);

var setup = function() {
    for (i = 0; i < answer.length; i++){
        display[i] = "_ ";
        result = result + display;
    }
    document.getElementById("game").innerHTML = result;
    result = "";
}

window.onload = function(){
    setup();
}

var play = function() {
    result = "";
    userLetters = document.getElementById("letters").value;
}