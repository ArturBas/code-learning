/*
GOAL:
Little Mac is an interplanetary space boxer, who is trying to win championship belts for various weight categories on other planets within the solar system.

Write a space.c program that helps him keep track of his target weight by: It should ask him what his earth weight is. Ask him to enter a number for the planet he wants to fight on. It should then compute his weight on the destination planet.

Compile and execute:

gcc space.c
./a.out
Here is the table of conversion:
#	Planet  Relative Gravity
1	Mercury 0.38
2	Venus   0.91
3	Mars    0.38
4	Jupiter	2.34
5	Saturn	1.06
6	Uranus	0.92
7	Neptune	1.19
*/

//SOLUTION:
#include <stdio.h>

int main() {
  int earthWeight;
  int planetNum;
  int planetWeight;

  printf("Little Mac, please tell me what is your current earth weight in kilograms? ");
  scanf("%d", &earthWeight);
  printf("Now, please type a number of the planet you wants to fight on by using the list below:\n 1 Mercury\n 2 Venus\n 3 Mars\n 4 Jupiter\n 5 Saturn\n 6 Uranus\n 7 Neptune\n Your type: ");
  scanf("%d", &planetNum);

  switch (planetNum) 
  {
  case 1:
    planetWeight = earthWeight * 0.38;
    break;

  case 2:
    planetWeight = earthWeight * 0.91;
    break;

  case 3:
    planetWeight = earthWeight * 0.38;
    break;

  case 4:
    planetWeight = earthWeight * 2.34;
    break;

  case 5:
    planetWeight = earthWeight * 1.06;
    break;

  case 6:
    planetWeight = earthWeight * 0.92;
    break;

  case 7:
    planetWeight = earthWeight * 1.19;
    break;

  default:
    planetWeight = 0;
    break;
  }

  printf("By dividing your weight on Earth by the earth's force of gravity (9.81m/s2) and by multiplying it by the gravitational force of the planet chosen to fight on, keep in mind please, that your weight on this planet is %dkg\n", planetWeight);
  
  return 0;
}