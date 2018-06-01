$(document).ready(initializeApp);



function initializeApp(){
console.log ('this is working'); 
showMole(); 
}

function clickHandlers(){
//onclick for when the user clicks the mole and wins 
}


function randomizeMole(){
//pauls animation will be running and timed randomly 
}


function winStatus(){
// when the user clicks the mole, some kind of alert 
}

function resetGame(){
// once the game is over, reset all variables to 0 and start the game over again
}

function showMole () {
   var randomNumber= [Math.floor(Math.random() * 4)];
   randomNumber= randomNumber + 1000; 
    setTimeout(popUpAnimation,randomNumber);
}

