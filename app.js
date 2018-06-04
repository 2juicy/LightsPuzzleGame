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
function winCondition(){
    $('#b' + answerL[answerL.length-1]).css('background', 'gray');
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
        counter();
    }
}
function guessTrack(){
    if (answerL.length === level + 1){
        $('#yourGuess').empty().append(' X');
    } else if (answerL.length === 1){
        $('#yourGuess').empty().append(' X');
        $('#winOrLose').text('');
    } else {
        $('#yourGuess').append(' X');
    }
}
var counter = function() {
    lightsOn = true;
    intervalId = setInterval(z, 1000);
    function z(){
        if (seconds > 0){
            seconds--;
            $('#b0, #b1, #b2, #b3').css('background','gray');
            $("#b" + randomArr[arrayCount]).css('background', backgroundArr[randomArr[arrayCount]]);
            arrayCount++;
        } else if (seconds == 0) {
            clearInterval(intervalId);
            seconds = level;
            lightsOn = false;
            arrayCount = 0;
            $('#b0, #b1, #b2, #b3').attr('style',' ');        
        }
    }
}
//On click events
$("#start").click(function(){
    if (lightsOn === false){
        $('#winOrLose').text('');
        $('#yourGuess').empty();
        seconds = level;
        answerL = [];
        randomArr = [];
        end = false;
        $('#b0, #b1, #b2, #b3').attr('style',' ');
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
$("#b0 , #b1 , #b2 , #b3").click(function() {
    if (end === false && lightsOn === false){
        let answer = $(this).attr("value");
        if (answer == answerL[answerL.length-1]){
            return;
        }
        $('#b0, #b1, #b2, #b3').attr('style',' ');
        let intAnswer = parseInt(answer);
        answerL.push(intAnswer);  
        guessTrack(); 
        winCondition();  
    }  
});
});//end document