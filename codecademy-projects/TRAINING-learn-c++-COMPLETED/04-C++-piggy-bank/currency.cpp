#include <iostream>

/*
GOAL:
You just returned from a trip to South America. The countries you visited were Colombia, Brazil, and Peru. You arrived back in your country with some foreign currencies from these three countries.

Write a C++ program called currency.cpp that prompts the user for the amount of each foreign currency. Your prompts should look like:

"Enter number of Colombian Pesos:"
"Enter number of Brazilian Reais:"
"Enter number of Peruvian Soles:"

Your program should then convert the amount entered by the user and display the total amount of USD. Your final output should look like:

"US Dollars = $______"
*/

//SOLUTION:

int main() {
  double pesos;
  double reais;
  double soles;
  double dollars;

  std::cout << "Enter number of Colombian Pesos:\n";
  std::cin >> pesos;
  std::cout << "Enter number of Brazilian Reais:\n";
  std::cin >> reais;
  std::cout << "Enter number of Peruvian Soles:\n";
  std::cin >> soles;
  
  double pesoToDollarConversionRate = 0.05; //1 Colombian Peso = 0.05 of dollar
  double realToDollarConversionRate = 0.21; //1 Brazilian Real = 0.21 of dollar
  double solToDollarConversionRate = 0.27; //1 Peruvian Sol = 0.27 of dollar

  dollars = 
  (pesos * pesoToDollarConversionRate) 
  + (reais * realToDollarConversionRate) 
  + (soles * solToDollarConversionRate);

  std::cout << "US Dollars = $" << dollars;
}