#include <iostream>
#include <string>
using namespace std;

void createPlayingFields(string playingFields[3][3], string initialValues[]);
void printPlayingFields(string playingFields[3][3]);
void playerTurn(string player, string playerChoice, string playerMarker, string playingFields[3][3], string initialValues[]);
void isWinner(string player, string playerMarker, string playingFields[3][3]);
void isDraw (string playingFields[3][3]);

