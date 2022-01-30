/*
In this project, you will use what you know about iterating over arrays to improve the quality of a paragraph and gather some information about that paragraph.

This is the same type of work that word processing software does. Additionally, you may have heard of linting, a process by which text is evaluated and improved by an application. In this project, you will create a miniature version of a linter using array methods that you have learned.
*/

let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

/*TASK 1
In the code editor, there is a string called story. We want to gather some information about the individual words and sentences in the string. Let’s split the string into individual words and save them in a new array called storyWords*/

let storyWords = story.split(' ');

/*TASK 2
Log how many words there are in this story to the console.*/
console.log(storyWords.length);

/*TASK 3
There is an array of words that are unnecessary. Iterate over your array to filter out these words. Save the remaining words in an array called betterWords. There are several ways that you could achieve this.*/

let betterWords = storyWords.filter(word => !unnecessaryWords.includes(word));
console.log(betterWords.length);

/*TASK 4
There is an array of words called overusedWords. These are words overused in this story. You want to let the user of your program know how many times they have used these overused words. There are two ways to achieve this.

Method 1*/

console.log(betterWords.filter(overusedWord => overusedWords.includes(overusedWord)).length);

//Method 2

let overusedWordsFinder = (text) => {
  let counter = 0;
  for (let i = 0; i < text.length; i++) {
    if (overusedWords.includes(text[i])) {
      counter += 1;
    }
  }
  return counter;
}
console.log(overusedWordsFinder(betterWords));

/*TASK 5
Now, count how many sentences are in the paragraph.
This may seem tricky, but remember that all of the sentences in this paragraph end with a period (.) or an exclamation mark (!). You could iterate over the array and add 1 to a sentence counter variable for each word that has a period or exclamation mark as its final character.

Method 1*/

console.log(betterWords.filter(word => word.includes('.')).length + betterWords.filter(word => word.includes('!')).length);

//Method 2

console.log(
  ['.', '!'].reduce((a, b) => betterWords.filter(word => word.includes(a)).length + betterWords.filter(word => word.includes(b)).length)
  );

/*TASK 6
Log these items to the console:
- The word count
- The sentence count
- The number of times each overused word appears
You could choose to simply log them one by one or, for a challenge, create a function that logs all of them with some formatting.*/

let textAnalyser = (text) => {
  let wordCount = text.length;
  let sentenceCount = text.filter(word => word.includes('.')).length + text.filter(word => word.includes('!')).length;
  let overusedWordsCount = betterWords.filter(overusedWord => overusedWords.includes(overusedWord)).length;
  return `The text you used includes:
  - ${wordCount} words;
  - ${sentenceCount} sentences;
  - ${overusedWordsCount} words overused;`
}
console.log(textAnalyser(betterWords));

/*TASK 7
Now, log the betterWords array to the console as a single string.

Method 1 (just to string) */

console.log(betterWords.toString());

//Method 2 (shaping as a text)
console.log(betterWords.join(' '));

