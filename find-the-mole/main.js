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

function getRandomNumber(min, max) {
   return (Math.floor(Math.random() * (max-min + 1))); 
}


function popUpAnimation(){
    console.log("pop UP animation is firing"); 
}


function initiateMole(element, minTime, maxTime){
    element = $(element);
    var nextTime = getRandomNumber(minTime, maxTime);
    var timer = null;
    
    
    function toggleState(){
      element.toggleClass('slide_animation');
      nextTime = getRandomNumber(minTime, maxTime);
      timer = setTimeout( toggleState, nextTime );//each successive timeout
    }
    
    timer = setTimeout( toggleState, nextTime );//start the first timeout
  }
  
// initiateMole(".mole",500,1000); 
// initiateMole(".mole",500,2000); 