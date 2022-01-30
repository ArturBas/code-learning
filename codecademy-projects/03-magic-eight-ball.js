/* 
GOAL:

Build the Magic Eight Ball (https://en.wikipedia.org/wiki/Magic_8-Ball) using control flow in JavaScript.

The user will be able to input a question, then our program will output a random fortune.
*/

//SOLUTION:

let userName = 'John';
if (userName) {
  console.log(`Hello, ${userName}`);
} else {
  console.log('Hello!');
}

let userQuestion = 'Shall be tomorrow a sunny day?';

console.log(`${userName} your question is '${userQuestion}'`);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidely so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  default:
    eightBall = 'Signs point to yes';
}

console.log(`The aswer is '${eightBall}'`);