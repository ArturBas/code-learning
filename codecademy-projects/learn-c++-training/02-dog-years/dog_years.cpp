/*
"How old is your fuzzy friend in human years?"
Dogs mature at a faster rate than human beings. If you own a dog, you might’ve heard this rule: one year for Snoopy equals seven years for you. Turns out, the math isn’t that simple. Dogs mature more quickly than we do early on.

Here’s how we can convert your dog’s age into human years:

  - The first two years of a dog’s life count as 21 human years.
  - Each following year counts as 4 human years.

So a one-year-old dog is 10.5 years old in human years, and a two-year-old dog is 21 years old in human years… hmm this is about to get more complicated. Before you start doing the math in your head, let a computer take care of it!

Write a C++ program called dog_years.cpp to calculate the age, in human years, of any dog older than 2.
*/

#include <iostream>

int main() {
  float dog_age; //Current amount of dog's age
  float early_years; //The dog first two years
  int later_years; //The dog's following years
  int human_years; //The dog's total human years

  early_years = 21; //Becuase the first two years of a dog’s life count as 21 human years

  std::cout << "Type your dog's amount of years (use the integer type of number)\n"; //Asking user for typing his dog's age
  std::cin >> dog_age; //Storing the inputed age into variable
  
  if(dog_age > 2) {
    later_years = (dog_age - 2) * 4; //Because each following year over 2 counts as 4 human years  
    human_years = early_years + later_years; //Calculating the dog's total human years when the current age is over 2
  } else {
    human_years = dog_age * (early_years / 2); //Calculating the dog's total human years when the current age is less than equal 2
  }

  std::cout << "My name is Puppy! Ruff ruff, I am " << human_years << " years old in human years."; //Displaying the dog's 'hello' message with giving its age
}