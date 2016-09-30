var numDice = prompt("How many dice do you want to roll?");
var doubleNum = prompt("Which number are you doubling on?", 10);
var again = ("Does your roll have an 'X again' effect, where X is a roll value?", No);
var rollResults = [];
var suxArray = [];
var totSux = 0;


for (int i=1; i<=numDice; i++) {
  results.push(getRandomInt(1,10));
  rollToSux(results[i-1], sux[i-1], doubleNum);
  for (i=0; i<=numDice-1; i++) {
    totSux += suxArray[i];
  }
}



if (again.isNumeric) {
  
}

// Make success results from roll results
function rollToSux(roll, sux, doubleNum) {
  if (roll >= doubleNum) {
    sux = 2;
  } else if (roll > 6 && roll < doubleNum) {
    sux = 1;
  } else {
    roll = 0;
  }
}


// Returns a random integer between min and max
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
