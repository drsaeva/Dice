"use strict"

var numDice = prompt("How many dice do you want to roll?");
var doubleNum = prompt("Which number are you doubling on?", 10);
var again = ("Does your roll have an 'X again' effect, where X is a roll value?", "No");
var rollResults = [];
var suxArray = [];
var totSux = 0;

for (i=0; i<numDice; i++) {
  rollResults.push(getRandomInt(1,10));
  suxArray.push(rollToSux(rollResults[i], doubleNum));
  
  
}
console.log("Your roll: " + rollResults);
console.log("The successes per roll: " + suxArray);
for (i=0; i<numDice; i++) {
    totSux += suxArray[i];
  }

console.log("Your total successes: " + totSux);

if (again.isNumeric) {
  
}

// Make success results from roll results
function rollToSux(roll, doubleNum) {
  if (roll >= doubleNum) {
    return 2;
  } else if (roll > 6 && roll < doubleNum) {
    return 1;
  } else {
    return 0;
  }
}


// Returns a random integer between min and max
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
