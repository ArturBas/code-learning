/*
GOAL:

Write a function subLength() that takes 2 parameters, a string and a single character. The function should search the string for the two occurrences of the character and return the length between them including the 2 characters. If there are less than 2 or more than 2 occurrences of the character the function should return 0.

Examples:

subLength('Saturday', 'a'); // returns 6
subLength('summer', 'm'); // returns 2
subLength('digitize', 'i'); // returns 0
subLength('cheesecake', 'k'); // returns 0
*/

//SOLUTION:

const subLength = (string, character) => {
    //convert string to array
    let ArrayFromString = [...string];
    //working variables
    let counter = 0;
    //check the character occurence in the string
    for(let i = 0; i < ArrayFromString.length; i++) {
        if(ArrayFromString[i] === character) {
            counter++;
        }    
    }
    //return the appropriate result
    return console.log(counter != 2 ? 0 : string.lastIndexOf(character) - string.indexOf(character) + 1);
}

//Check the code correctness
subLength('Saturday', 'a');
subLength('summer', 'm');
subLength('digitize', 'i');
subLength('cheesecake', 'k');
subLength('funny', 'n');