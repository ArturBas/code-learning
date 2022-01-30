/*
GOAL:

In this project, you will be implementing some of the most exciting functionality from the widely-popular lodash.js library which provides many methods that add new functionality for numbers, strings, objects, and arrays.

If you wanted to use this library in your own projects right now, you could load it, using a Content Delivery Network (CDN) link, in the <head> of your project’s index.html file , like so:

<head>
  <script src='https://cdn.jsdelivr.net/npm/lodash@4.17.20/lodash.min.js'></script>
  <!-- Make sure that you load lodash before the file that uses it. -->
  <script src='file-that-uses-lodash.js'></script>
</head>

However, implementing the methods from lodash on your own is an invaluable exercise in problem-solving and a great way to understand how the methods work! We’ve selected ten methods for you to implement and, in implementing each method, you will follow these four steps:

    - Specify the functionality of the method we are implementing
    - Ideate a game plan for how to implement this functionality in code
    - Implement our game plan
    - Test our code to ensure it works as expected
*/

//SOLUTION:

/* 1. Before we get started implementing our new methods, we need to create an object to contain them. This object will represent our library containing all the functionality we add to it.

Create a new variable called _ that is initialized to an empty object.*/

let _ = {

/*
2. We’ve written test files for each task in this project. Let’s run the first test suite to ensure your lodash object was initialized correctly.

To run a file using node, we type the node command in a command line followed by the name of the file. For example, to run the main file we are working on, we would run node _.js.

Our test files are all located in the test/ directory. To run the test suite for this task, type node test/lodash.js in your terminal and then press enter. The test will either throw errors if something is not currently working properly in your code or will print a success message to the console if your code is good to go.

3. Implement .inRange()

Specify: The first method we will implement is .clamp() (see: https://lodash.com/docs/4.17.15#clamp). Read the explanation and examples of the method in the linked documentation to get a sense of how the method should work.

Here is a summary of the method:

.clamp() takes three arguments: a number, a lower bound, and an upper bound
.clamp() modifies the provided number to be within the two provided bounds
If the provided number is smaller than the lower bound, it will return the lower bound as the final number
If the number is larger than the upper bound, it will return the upper bound as the final number
If the number is already within the two bounds, it will return the number as the final number
You can see a diagram demonstrating this functionality here.

When you’ve ideated a game plan for how to implement this functionality, move on to the next step to see how we plan to do it.
*/

  clamp(number, lower, upper) {
    let lowerClampedValue = Math.max(number, lower);
    let clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },

/*
4. Implement .inRange()

Specify: The next number method we will implement is .inRange() (see: https://lodash.com/docs/4.17.15#inRange). Read the explanation and examples of the method in the linked documentation to get a sense of how the method should work.

Here is a summary of the method:

.inRange() takes three arguments: a number, a start value, and an end value
.inRange() checks to see if the provided number falls within the range specified by the start and end values
If the provided number is smaller than the start value, .inRange() will return false
If the provided number is larger than or equal to the end value, .inRange() will return false
If the provided number is within the start and end values, .inRange() will return true
If no end value is provided to the method, the start value will be 0 and the end value will be the provided start value
If the provided start value is larger than the provided end value, the two values should be swapped
When you’ve ideated a game plan for how to implement this functionality, move on to the next step to see how we plan to do it.
*/

  inRange(number, start, end) {
    end != null ? end : end = 0;
  return start < end && number >= start && number < end ? true
    : start > end && number >= end && number < start ? true
    : false
  },

/*
5. Implement .words()

Specify: Let’s start implementing some string methods! The first string method we will implement is .words() (see: https://lodash.com/docs/4.17.15#words). We will be writing a slightly modified version of this method to save you some time. Read the explanation and examples of the method in the linked documentation to get a sense of how the method should work. Then read below to see which pieces of functionality you will implement.

Here is a summary of what your method should do:

.words() takes one argument: a string
.words() splits the string into an array of words
A word is defined by a space-separated string of characters, so each space character, ' ', indicates the end of one word and the start of the next
Note: You may have noticed in the documentation that this function has a pattern parameter. Your method does not need to accept the additional pattern parameter, we will only split our string into words based on spaces
When you’ve ideated a game plan for how to implement this functionality, move on to the next step to see how we plan to do it.
*/

  words(string) {
    return string.split(' ');
  },

/*
6. Implement .pad()


Specify: The next string method we will implement is .pad() (see: https://lodash.com/docs/4.17.15#pad). We will be writing a slightly modified version of this method to save you some time. Read the explanation and examples of the method in the linked documentation to get a sense of how the method should work. Then read below to see which pieces of functionality you will implement.

Here is a summary of what your method should do:

  - .pad() takes two arguments: a string and a length
  - .pad() adds spaces evenly to both sides of the string to make it reach the desired length
  - Extra padding is added to the end of the string if an odd amount of padding is required to reach the specified length
  - Your method does not need to accept the additional chars parameter; we will only add space characters to pad our string

You can see a diagram demonstrating this functionality here: https://content.codecademy.com/programs/programming-with-javascript/lodash-assets/pad.svg.
*/

  pad(string, paddingLength) {
    if(paddingLength > string.length) {
      let leftPadding = Math.floor((paddingLength - string.length) / 2);
      let rightPadding = Math.floor((paddingLength - string.length) / 2) + ((paddingLength- string.length) % 2);  
      return ' '.repeat(leftPadding).concat(string).concat(' '.repeat(rightPadding));
    } else {
      return string;
    }
  },

/*
7. Implement _.has()

Specify: Let’s begin implementing some new object methods! The first object method we will implement is .has() (see: https://lodash.com/docs/4.17.15#has). We will be writing a slightly modified version of this method to save you some time. Read the explanation and examples of the method in the linked documentation to get a sense of how the method should work. Then read below to see which pieces of functionality you will implement.

Here is a summary of what your method should do:

  - .has() takes two arguments: an object and a key
  - .has() checks to see if the provided object contains a value at the specified key
  - .has() will return true if the object contains a value at the key and will return false if not

  Your method does not need to accept the additional path parameter; we will only check for unnested values.
*/

  has(inputObject, inputKey) {
    for(const [key, value] of Object.entries(inputObject)) {
      if(key === inputKey && value !== undefined) {
        return true;
      } else {
        return false;
      }
    } 
  },
  
/*
8. Implement _.invert()

Specify: The next object method we will implement is .invert() (see: https://lodash.com/docs/4.17.15#invert). Read the explanation and examples of the method in the linked documentation to get a sense of how the method should work.

Here is a summary of what your method should do:

  - .invert() takes one argument: an object
  - .invert() iterates through each key / value pair in the provided object and swaps the key and value
*/

  invert(inputObject) {
    let targetObj = {};
    for(const [key, value] of Object.entries(inputObject)) {
        targetObj[value] = key;
      }
    return targetObj;
  },

/*
9. Implement _.findKey()

Specify: The final object method we will implement is .findKey() (see: https://lodash.com/docs/4.17.15#findKey). Read the explanation and examples of the method in the linked documentation to get a sense of how the method should work.

Here is a summary of what your method should do:

  - .findKey() takes two arguments: an object and a predicate function — a function that returns a boolean value
  - .findKey() iterates through each key / value pair in the provided object and calls the predicate function with the value
  - .findKey() returns the first key that has a value that returns a truthy value from the predicate function
  - .findKey() returns undefined if no values return truthy values from the predicate function
*/
  
  findKey(inputObject, predicateFunction) {
     for(const [key, value] of Object.entries(inputObject)) {
        if(predicateFunction(value) === true) {
          return key;
        } else {
          return undefined;
      }
    }
  },

/*
10. Implement _.drop()

Specify: It’s time to start implementing methods for our final data type: arrays! The first array method we will implement is .drop() (see: https://lodash.com/docs/4.17.15#drop). Read the explanation and examples of the method in the linked documentation to get a sense of how the method should work.

Here is a summary of what your method should do:

  - .drop() takes two arguments: an array and a number representing the number of items to drop from the beginning of the array
  - .drop() returns a new array which contains the elements from the original array, excluding the specified number of elements from the beginning of the array
  - If the number of elements to drop is unspecified, your method should drop one element
*/

  drop(array, number) {
    if(number === undefined) {
      return array.slice(1); 
    } else {
    return array.slice(-(array.length - number));
    }
  },

/*
11. Implement _.dropWhile()

Specify: The next array method we will implement is .dropWhile(). Read the explanation and examples of the method in the linked documentation to get a sense of how the method should work.

Here is a summary of what your method should do:

  - .dropWhile() takes two arguments: an array and a predicate function
  - The supplied predicate function takes three arguments: the current element, the current element index, and the whole array
  - .dropWhile() creates a new copy of the supplied array, dropping elements from the beginning of the array until an element causes the predicate function to return a falsy value
*/

  dropWhile(array, predicateFunction) {
    let number = array.findIndex(function(element, index) {
      return !predicateFunction(element, index, array);
    });
    let outputArray = this.drop(array, number);
    return outputArray;
  },

/*
12. Implement _.chunk()

Specify: The last array method we will implement is .chunk() (see: https://lodash.com/docs/4.17.15#chunk). Read the explanation and examples of the method in the linked documentation to get a sense of how the method should work.

Here is a summary of what your method should do:

  - .chunk() takes two arguments: an array and a size
  - .chunk() breaks up the supplied array into arrays of the specified size
  - .chunk() returns an array containing all of the previously-created array chunks in the order of the original array
  - If the array can’t be broken up evenly, the last chunk will be smaller than the specified size
  - If no size is supplied to the method, the size is set to 1

You can see a diagram demonstrating this functionality here: https://content.codecademy.com/programs/programming-with-javascript/lodash-assets/chunk.svg.
*/

  chunk(array, size) {
    let outputArray = [];
    for(let i = 0; i < array.length; i += size) {
        outputArray.push(array.slice(i, i + size));
    }
    return outputArray;
  }

  };
// Do not write or modify code below this line.
module.exports = _;