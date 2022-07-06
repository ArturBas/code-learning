#include <iostream>
#include <string>
#include "ttt_functions.hpp"
using namespace std;

string initialValues[] = {" a1 ", " a2 ", " a3 ", " b1 ", " b2 ", " b3 ", " c1 ", " c2 ", " c3 "};
string playingFields[3][3];
string playerOne = "Player 1";
string playerTwo = "Player 2";
string playerOneChoice;
string playerTwoChoice;
string playerOneMarker = " o ";
string playerTwoMarker = " x ";
char readyToPlay;

int main()
{
    cout << "===========\nTIC TAC TOE\n===========\nHello! The game is dedicated to two players. When playing fields are printed, player one is selecting one of them by typing its ID (from a1 to c3). The choice will be marked by the letter 'o'. Then, the player two is choicing its type what will be marked by the letter 'x'. The sequence is reapited until ony of players win or until there is no more possibility to win at all. Winning the game means being the first in placing three of o- or x-marks in a horizontal, vertical or diagonal row.\n";
    cout << "Are you ready? y/n\n";
    cin >> readyToPlay;
    while (readyToPlay != 'y' || readyToPlay != 'n')
    {
        if(readyToPlay == 'y')
        {
            createPlayingFields(playingFields, initialValues);
            printPlayingFields(playingFields);
            break;
        }
        else if (readyToPlay == 'n')
        {
            cout << "Okay. Come back when you are ready to play.\nBye bye!\n";
            return 0;
        }
        else
        {
            cout << "Please type one of lowercase 'y' or 'n':\n";
            cin >> readyToPlay;
        }   
    }
    while(playingFields[0][0] == " a1 " || playingFields[0][1] == " a2 " || playingFields[0][2] == " a3 " || playingFields[1][0] == " b1 " || playingFields[1][1] == " b2 " || playingFields[1][2] == " b3 " || playingFields[2][0] == " c1 " || playingFields[2][1] == " c2 " || playingFields[2][2] == " c3 ")
    {
        playerTurn(playerOne, playerOneChoice, playerOneMarker, playingFields, initialValues);
        printPlayingFields(playingFields);
        isWinner(playerOne, playerOneMarker, playingFields);
        isDraw(playingFields);
        playerTurn(playerTwo, playerTwoChoice, playerTwoMarker, playingFields, initialValues);
        printPlayingFields(playingFields);
        isWinner(playerTwo, playerTwoMarker, playingFields);
        isDraw(playingFields);
    }
}