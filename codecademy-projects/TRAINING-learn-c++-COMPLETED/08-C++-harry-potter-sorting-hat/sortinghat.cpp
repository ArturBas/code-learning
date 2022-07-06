/*
GOAL:
“A thousand years or more ago,
When I was newly sewn,
There lived four wizards of renown,
Whose names are still well known.”

The Hogwarts School of Witchcraft and Wizardry (see: https://en.wikipedia.org/wiki/Hogwarts) welcomes you! First-year students must go through the annual Sorting Ceremony.

The Sorting Hat is a talking hat at Hogwarts that magically determines which of the four school Houses each new student belongs most to:

    - gryffindor
    - hufflepuff
    - ravenclaw
    - slytherin

Write a sortinghat.cpp program that asks the user some questions and places them into one of the four Houses based on their answers!
*/

#include <iostream>
#include <string>
using namespace std;
 
int main() {
 
    int gryffindor = 0;
    int hufflepuff = 0;
    int ravenclaw = 0;
    int slytherin = 0;

    int answer1;
    int answer2;
    int answer3;
    int answer4;

    int max = 0;
    string house;
 
    cout << "The Sorting Hat Quiz!\n";
    cout << "Q1) When I'm dead, I want people to remember me as:\n  1) The Good\n  2) The Great\n  3) The Wise\n  4) The Bold\n";
    cin >> answer1;

    if(answer1 == 1) {
        hufflepuff++;
    } else if(answer1 == 2) {
        slytherin++;
    } else if(answer1 == 3) {
        ravenclaw++;
    } else if(answer1 == 4) {
        gryffindor++;
    } else {
        cout << "Invalid input.\n";
    }

    cout << "Q2) Dawn or Dusk?\n  1) Dawn\n  2) Dusk\n";
    cin >> answer2;

    if(answer2 == 1) {
        gryffindor++;
        ravenclaw++;
    } else if(answer2 == 2) {
        hufflepuff++;
        slytherin++;
    } else {
        cout << "Invalid input.\n";
    }

    cout << "Q3) Which kind of instrument most pleases your ear?\n  1) The violin\n  2) The trumpet\n  3) The piano\n  4) The drum\n";
    cin >> answer3;

    if(answer3 == 1) {
        slytherin++;
    } else if(answer3 == 2) {
        hufflepuff++;
    } else if(answer3 == 3) {
        ravenclaw++;
    } else if(answer3 == 4) {
        gryffindor++;
    } else {
        cout << "Invalid input.\n";
    }

    cout << "Q4) Which road tempts you most?\n  1) The wide, sunny grassy lane\n  2) The narrow, dark, lantern-lit alley\n  3) The twisting, leaf-strewn path through woods\n  4) The cobbled street lined (ancient buildings)\n";
    cin >> answer4;

    if(answer4 == 1) {
        hufflepuff++;
    } else if(answer4 == 2) {
        slytherin++;
    } else if(answer4 == 3) {
        gryffindor++;
    } else if(answer4 == 4) {
        ravenclaw++;
    } else {
        cout << "Invalid input.\n";
    }

    
    if (gryffindor > max) {
        max = gryffindor;
        house = "Gryffindor";
    }
    
    if (hufflepuff > max) {
        max = hufflepuff;
        house = "Hufflepuff";
    }
    
    if (ravenclaw > max) {
        max = ravenclaw;
        house = "Ravenclaw";
    }
        
    if (slytherin > max) {
        max = slytherin;
        house = "Slytherin";
    }

    if(max > 0) {
        cout << house << "!\n";
    } else {
        cout << "All answers are invalid. Your application is rejected.\n";
    }

    return 0;
}