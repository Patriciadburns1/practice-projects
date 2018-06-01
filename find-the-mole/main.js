$(document).ready(initializeApp);

var player;
var score = 0;

function initializeApp(){
clickHandlers();
showMole(); 
displayScore();
}

function clickHandlers(){
//onclick for when the user clicks the mole and wins 
    $('.container>.mole').on('click', function() {
        score++
        winStatus
    });
    $('.resetBtn').on('click', resetGame);
}


function randomizeMole(){
//pauls animation will be running and timed randomly 
}

function popUpAnimation () {
    console.log('popUpAnimation()')
    $('.mole').toggleClass('slide_animation');
}

function winStatus(){
    if (score === 1){
        alert('you won!')
    }
// when the user clicks the mole, some kind of alert 
}

function resetGame(){
    score = 0;
    $('.scoreText').text('0');
// once the game is over, reset all variables to 0 and start the game over again
}

function showMole () {
   var randomNumber= [Math.floor(Math.random() * 4)];
   randomNumber= randomNumber + 1000; 
    setTimeout(popUpAnimation,randomNumber);
}

function displayScore(){
    $('.scoreText').text(score);
}

