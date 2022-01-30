/*
GOAL:

Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.

There are a few simple rules for translating text to whale language:
1. There are no consonants. Only vowels excluding “y”.
2. The u‘s and e‘s are extra long, so we must double them in our program.

Once we have converted text to the whale language, the result is sung slowly, as is a custom in the ocean.

To accomplish this translation, we can use our knowledge of loops. Let’s get started!
*/

//SOLUTION:

const input = 'a whale of a deal!';
const inputArr = input.split('');
console.log(inputArr);
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

//a loop to iterate through each letter of the input variable to compare each letter with the vowels array
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(input[i].toUpperCase());
      if (input[i] === 'e' || input[i] === 'u') {
          resultArray.push(input[i].toUpperCase());
      }
    }
  }
}

console.log(resultArray.join(''));