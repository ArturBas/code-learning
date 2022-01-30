/*
GOAL:
This is a classic coding project that utilizes switch statement logic to convert a given date into a familiar style displaying the month, day, and year all written out.

It may be complicated to wrap your head around at first, but after considering some cases, it may not be so tricky after all.

Want to give it a go?

Write a program that takes any user input in the format mm/dd/yyyy and prints it out in the style “January 1st, 2021.” (derived in English from whatever input is given).

For instance, input may look like:

01/01/2021
Which produces the following output:

January 1st, 2021.
*/
#include <stdio.h>

int main(void) {
  int month, day, year;

  // Standard date form
  printf("Enter date (mm/dd/yyyy): ");
  // Split the user input into 3 variables for the date
  // Don't worry about the `scanf()` below, you'll learn more about these later!
  scanf("%d /%d /%d", &month, &day, &year);

  // Print the month
  switch (month)
  {
  case 1:
    printf("January ");
    break;
  case 2:
    printf("February ");
    break;
  case 3:
    printf("March ");
    break;
  case 4:
    printf("April ");
    break;
  case 5:
    printf("May ");
    break;
  case 6:
    printf("June ");
    break;
  case 7:
    printf("July ");
    break;
  case 8:
    printf("August ");
    break;
  case 9:
    printf("September ");
    break;
  case 10:
    printf("October ");
    break;
  case 11:
    printf("November ");
    break;
  default:
    printf("December ");
    break;
  }

  // Print the day
  switch (day)
  {
  case 1: case 21: case 31:
    printf("%dst, ", day);
    break;
  case 2: case 22:
    printf("%dnd, ", day);
    break;
  case 3: case 23:
    printf("%drd, ", day);
    break;
  default:
    for (int i = 0; i < 31; i++)
    {
      day = i;
    }
    printf("%dth, ", day);
    break;
  }

  // Print the year
  printf("%d.\n", year);
  
  return 0;
}