/*
GOAL:
Fizz Buzz (see: https://en.wikipedia.org/wiki/Fizz_buzz) is a classic developer interview question that is asked or referred to so often for so long, it is almost a cliché!

Write a fizzbuzz.cpp program that outputs numbers from 1 to 100.

But for multiples of 3, print Fizz instead of the number and for the multiples of 5, print Buzz. For numbers which are multiples of both 3 and 5 print, FizzBuzz.
*/

//SOLUTION:
#include <iostream>
using namespace std;
int main() {
 
  for(int i = 0; i <= 100; i++) {
      if((i % 3 == 0) && (i % 5 != 0)) {
          cout << "Fizz\n";
      } else if((i % 5 == 0) && (i % 3 != 0)) {
          cout << "Buzz\n";
      } else if((i % 3 == 0) && (i % 5 == 0)) {
          cout << "FizzBuzz\n";
      } else {
          cout << i << "\n";
      }
  }
return 0;
}