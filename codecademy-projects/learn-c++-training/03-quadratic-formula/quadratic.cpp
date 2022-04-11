/*
GOAL:
In algebra, a quadratic equation is an equation having the form: https://en.wikipedia.org/wiki/Quadratic_formula

Graphing, we get the curve: https://en.wikipedia.org/wiki/Quadratic_formula#/media/File:Quadratic_roots.svg

The corresponding x values are the x-intercepts of the graph, while a, b, and c are constants.

Write a C++ program called quadratic.cpp that solves the quadratic equation for the x‘s​
*/

//SOLUTION:
#include <iostream>
#include <cmath>

int main() {
  
  //Getting the a, b, c values
  double a;
  double b;
  double c;
  
  std::cout << "Enter a: \n";
  std::cin >> a;
  std::cout << "Enter b: \n";
  std::cin >> b;
  std::cout << "Enter c: \n";
  std::cin >> c;

  //Solving for the roots

  double root1;
  double root2;

  root1 = ((-b) + std::sqrt((std::pow(b, 2) - 4 * a * c))) / (2 * a);
  root2 = ((-b) - std::sqrt((std::pow(b, 2) - 4 * a * c))) / (2 * a);

  std::cout << "Root1 is: " << root1 << "\n";
  std::cout << "Root2 is: " << root2 << "\n";
}