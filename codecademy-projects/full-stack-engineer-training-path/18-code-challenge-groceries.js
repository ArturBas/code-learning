/*
GOAL:
Write a function groceries() that takes an array of object literals of grocery items. The function should return a string with each item separated by a comma except the last two items should be separated by the word 'and'. Make sure spaces (' ') are inserted where they are appropriate.

Examples:

groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
// returns 'Carrots, Hummus, Pesto and Rigatoni'
 
groceries( [{item: 'Bread'}, {item: 'Butter'}] );
// returns 'Bread and Butter'
 
groceries( [{item: 'Cheese Balls'}] );
// returns 'Cheese Balls'
*/

//SOLUTION:

const groceries = (arrayOfObjects) => {
    let outputString = '';
    if(arrayOfObjects.length > 3) {
        for(let i = 0; i < (arrayOfObjects.length - 3); i++) {
            outputString += `${arrayOfObjects[i].item}, `;
        }
        outputString += `${arrayOfObjects[arrayOfObjects.length - 2].item} and ${arrayOfObjects[arrayOfObjects.length - 1].item}`;
    } else if(arrayOfObjects.length === 3) {
        outputString = `${arrayOfObjects[0].item}, ${arrayOfObjects[1].item} and ${arrayOfObjects[2].item}`;
    } else if(arrayOfObjects.length === 2) {
        outputString = `${arrayOfObjects[0].item} and ${arrayOfObjects[1].item}`;
    } else if(arrayOfObjects.length === 1) {
        outputString = arrayOfObjects[0].item;
    } else if(arrayOfObjects.length === 0) {
        outputString = 'The array of grocery items is empty';
    }
    return console.log(outputString);
}

//Check the code correctness
groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
groceries( [{item: 'Bread'}, {item: 'Butter'}] );
groceries( [{item: 'Cheese Balls'}] );
groceries( [] );
groceries([{item: 'Lettuce'}, {item: 'Onions'}, {item: 'Tomatoes'}]);