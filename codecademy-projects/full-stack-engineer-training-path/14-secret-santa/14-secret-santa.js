//Include fs module
const fs = require('fs');

//Calling the readFileSync() method to read 'names.txt' file
const text = fs.readFileSync('./codecademy-projects/14-secret-santa/names.txt', {encoding: 'utf8', flag: 'r'});

//Split the text into particular names
const names = text.split('\n');

//Create a array-contener for pair-objects
const pairs = [];

//Create a constructor for pairs-objects
function Pair (pairCounter, name1, name2) {
      this.pairCounter = pairCounter;
      this.name1 = name1;
      this.name2 = name2;
}

//Randomize the order of array
function shuffleArray (array) {
    const newArray = array.slice()
    for (let i = newArray.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[rand]] = [newArray[rand], newArray[i]];
    }
    return newArray;
}

//Create random pair-objects
function makeRandomPairs (inputArray, outputArray) {
    let counter = 0;    
    inputArray = shuffleArray(inputArray);

    for (let k = 0; k < (inputArray.length / 2); k++) {
        counter += 1;
        let pair = new Pair (counter, inputArray[k], inputArray[k + (inputArray.length/2)]);
        outputArray.push(pair);
    }
}
makeRandomPairs (names, pairs);

//Display the pairs-array data
console.log(pairs);
