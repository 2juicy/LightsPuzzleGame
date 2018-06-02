//variables
var randomize = (Math.floor(Math.random() * 4));
var randomC = randomize;
randomArr = new Array();
answerL = new Array();
var arrayCount = 0;
var backgroundArr = ['green','red','blue','yellow'];
var seconds = 4;
var level = 4;
var wins = 0;
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
            wins++;
            $('#yourWins').text(wins);
            $('#yourLevel').text(level - 3);
            $('#winOrLose').text('You win! Press start to begin next level.');
        } else {
            $('#winOrLose').text('You lose try again or start over!');
        }
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
            arrayCount = 0;
            colorGray();            
        }
}}
//On click events
$("#start").click(function(){
    $('#winOrLose').text('');
    seconds = level;
    answerL = [];
    randomArr = [];
    win = false;
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
});
$("#b0").click(function() {
    let answer = $(this).attr("value");
    let intAnswer = parseInt(answer);
    answerL.push(intAnswer);   
        winCondition();    
});
$("#b1").click(function() {
    let answer = $(this).attr("value");
    let intAnswer = parseInt(answer);
    answerL.push(intAnswer);
        winCondition();    
});
$("#b2").click(function() {
    let answer = $(this).attr("value");
    let intAnswer = parseInt(answer);
    answerL.push(intAnswer);
        winCondition();    
});
$("#b3").click(function() {
    let answer = $(this).attr("value");
    let intAnswer = parseInt(answer);
    answerL.push(intAnswer);
        winCondition();
});
});//end document