#include <stdio.h>

/*
GOAL:
Fizz Buzz (see: https://en.wikipedia.org/wiki/Fizz_buzz) is a classic developer interview question that is asked or referred to so often for so long, it is almost a cliché!

Though this challenge will appear very simplistic to those with some coding experience, it is designed to weed out 99.5% of programming job candidates who cannot creatively use their coding knowledge to solve simple problems.

Want to give it a shot?

Write a fizzbuzz.c program that outputs numbers from 1 to 100.

But for multiples of 3, print Fizz instead of the number and for the multiples of 5, print Buzz. For numbers which are multiples of both 3 and 5, print FizzBuzz.
*/

//SOLUTION:

int main () {
   for(int i = 1; i <= 100; i++) {
    if(i % 3 == 0 && i % 5 == 0) {
      printf("FizzBuzz\n");
    } else if(i % 3 == 0) {
      printf("Fizz\n");
    } else if(i % 5 == 0) {
      printf("Buzz\n");
    } else {
      printf("%d\n", i);
    }
  }
} 