/* 
GOAL:

Deep in his mountain-side meteorology lab, the mad scientist Kelvin has mastered weather prediction.

Recently, Kelvin began publishing his weather forecasts on his website. However there’s a problem: All of his forecasts describe the temperature in Kelvin.

Let’s convert Kelvin to Celsius, then to Fahrenheit.
*/

//SOLUTION:

//The forecast today in Kelvin
const kelvin = 0;

//The forecast today in Celsius
const celsius = kelvin - 273;

//The forecast today in Fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;

//Rounding down the fahrenheit value to being integer (the largest one less then or equal to the given decimal)
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} Fahrenheit.`);

//The forecast in Newton
let newton = celsius * (33 / 100);

//Rounding down the Newton value to being integer (the largest one less then or equal to the given decimal)
newton = Math.floor(newton);

console.log(`The temperature is ${newton} Newton.`);