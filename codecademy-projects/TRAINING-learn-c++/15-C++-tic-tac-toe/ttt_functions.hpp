#include <iostream>
#include <string>
using namespace std;

void welcome(char readyToPlay);
void createPlayingFields(string playingFields[3][3], string initialValues[]);
void printPlayingFields(string playingFields[3][3]);
void playerOneTurn(string playingFields[3][3], string initialValues[]);
void playerTwoTurn(string playingFields[3][3], string initialValues[]);
void isInRange(string playingFields[3][3], string reference);

