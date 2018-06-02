//variables
var randomize = (Math.floor(Math.random() * 4));
var randomC = randomize;
randomArr = new Array();
var arrayCount = 0;
var backgroundArr = ['green','red','blue','yellow'];
var seconds = 4;
//Document check
$(document).ready(function() {
    var intervalId;

function colorGray(){
    $('#b0').css("background", "gray");
    $('#b1').css("background", "gray"); 
    $('#b2').css("background", "gray");
    $('#b3').css("background", "gray");
}
colorGray();

// function colorBtn(x){
//     let delay = setTimeout(function() {
//         colorGray();
//         $("#b" + randomize).css('background', backgroundArr[randomArr[x]]);
//     }, 1000);
// }


// let delay = setTimeout(function() {
//     $('#b0').css("background", "green");
//     $('#b1').css("background", "red"); 
//     $('#b2').css("background", "blue");
//     $('#b3').css("background", "yellow");
// }, 3000);

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
            seconds = 4;
            arrayCount = 0;
            randomArr = [];
            colorGray();
        }
}}







$("#start").click(function(){
    colorGray();
    for (let i = 0; i < 4; i++){  
        do {
            randomize = (Math.floor(Math.random() * 4)); 
        } while (randomize === randomC);
        randomArr.push(randomize);
        randomC = randomize;        
    } 
    counter();
    randomize = (Math.floor(Math.random() * 4));        
        

});



























































});