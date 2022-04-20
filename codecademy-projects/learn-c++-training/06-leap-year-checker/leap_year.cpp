/*
GOAL:
Write a leap_year.cpp program that:

    1. Takes a year as input.
    2. Checks to see if the year is a four-digit number.
    3. Displays whether or not the year falls on a leap year.

There are 3 criteria that must be taken into account to identify a leap year:

    - If the year can be evenly divided by 4 then it is a leap year, however…
    - If that year can be evenly divided by 100, and it is not evenly divided by 400, then it is NOT a leap year.
    - If that year is evenly divisible by 400, then it is a leap year.
*/

//SOLUTION:
#include <iostream>

int main() {
    int year;

    std::cout << "Enter four-digit-year:\n";
    std::cin >> year;

    if(year > 1000 && year < 9999) {
        if(year % 4 != 0 || (year % 4 == 0 && year % 400 != 0 && year % 100 == 0)) {
                std::cout << year << " does not fall on a leap year.\n";
            } else {
            std::cout << year << " falls on a leap year.\n";
            }
    } else {
        std::cout << "Invalid entry.\n";
    }
}    