//variables
var randomize = (Math.floor(Math.random() * 4));
var randomC = randomize;
randomArr = new Array();
answerL = new Array();
var arrayCount = 0;
var backgroundArr = ['green','red','blue','yellow'];
var seconds = 4;
var level = 4;
var tries = 0;
var end = true;
var lightsOn = false;
//Document check
$(document).ready(function() {
    var intervalId;
//functions
function colorGray(){
    $('#b0').attr('style',' ');
    $('#b1').attr('style',' ');
    $('#b2').attr('style',' ');
    $('#b3').attr('style',' ');
}
function winCondition(){
    if (answerL.length === level){
        let answer1 = answerL.toString();
        let answer2 = randomArr.toString();
        console.log(answer1, answer2);
        if (answer1 === answer2){
            level++;
            tries++
            $('#yourTries').text(tries);
            $('#yourLevel').text(level - 3);
            $('#winOrLose').text('You win! Press start to begin next level.');
            end = true;
        } else {
            tries++;
            $('#yourTries').text(tries);
            $('#winOrLose').text('You lose try again or start over!');            
            answerL = [];
        }
    }
}
function guessTrack(){
    if (answerL.length === level + 1){
        $('#yourGuess').empty();
        $('#yourGuess').append(' X');
    } else if (answerL.length === 1){
        $('#yourGuess').empty();
        $('#winOrLose').text('');
        $('#yourGuess').append(' X');
    } else {
        $('#yourGuess').append(' X');
    }
}
var counter = function() {
    intervalId = setInterval(z, 1000);
    function z(){
        if (seconds > 0){
            seconds--;
            colorGray();
            $("#b" + randomArr[arrayCount]).css('background', backgroundArr[randomArr[arrayCount]]);
            arrayCount++;
        } else if (seconds == 0) {
            clearInterval(intervalId);
            seconds = level;
            lightsOn = false;
            arrayCount = 0;
            colorGray();            
        }
}}
//On click events
$("#start").click(function(){
    if (lightsOn === false){
        lightsOn = true;
        $('#winOrLose').text('');
        $('#yourGuess').empty();
        seconds = level;
        answerL = [];
        randomArr = [];
        end = false;
        colorGray();
        for (let i = 0; i < level; i++){  
            do {
                randomize = (Math.floor(Math.random() * 4)); 
            } while (randomize === randomC);
            randomArr.push(randomize);
            randomC = randomize;        
        } 
        console.log(randomArr);
        counter(); 
    }      
});
$("#b0").click(function() {
    if (end === false && lightsOn === false){
        let answer = $(this).attr("value");
        let intAnswer = parseInt(answer);
        answerL.push(intAnswer);  
        guessTrack(); 
        winCondition();  
    }  
});
$("#b1").click(function() {
    if (end === false && lightsOn === false){
        let answer = $(this).attr("value");
        let intAnswer = parseInt(answer);
        answerL.push(intAnswer);
        guessTrack()
        winCondition(); 
    }   
});
$("#b2").click(function() {
    if (end === false && lightsOn === false){
        let answer = $(this).attr("value");
        let intAnswer = parseInt(answer);
        answerL.push(intAnswer);
        guessTrack()
        winCondition(); 
    }   
});
$("#b3").click(function() {
    if (end === false && lightsOn === false){
        let answer = $(this).attr("value");
        let intAnswer = parseInt(answer);
        answerL.push(intAnswer);
        guessTrack()
        winCondition();
    }
});
});//end document