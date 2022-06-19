#include <iostream>
#include <string>
#include "ttt_functions.hpp"
using namespace std;

string initialValues[] = {" a1 ", " a2 ", " a3 ", " b1 ", " b2 ", " b3 ", " c1 ", " c2 ", " c3 "};
string playingFields[3][3];
char readyToPlay;
bool isEnd = false;

int main()
{
    welcome(readyToPlay);
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
        playerOneTurn(playingFields, initialValues);
        printPlayingFields(playingFields);
        if((playingFields[0][0] == " o " && playingFields[0][1] == " o " && playingFields[0][2] == " o ") || (playingFields[1][0] == " o " && playingFields[1][1] == " o " && playingFields[1][2] == " o ") || (playingFields[2][0] == " o " && playingFields[2][1] == " o " && playingFields[2][2] == " o ") || (playingFields[0][0] == " o " && playingFields[1][1] == " o " && playingFields[2][2] == " o ") || (playingFields[2][0] == " o " && playingFields[1][1] == " o " && playingFields[0][2] == " o "))
        {
            cout << "Player 1 is the winner. Congratulations!\n";
            return 0;
        }
        if(playingFields[0][0] != " a1 " && playingFields[0][1] != " a2 " && playingFields[0][2] != " a3 " && playingFields[1][0] != " b1 " && playingFields[1][1] != " b2 " && playingFields[1][2] != " b3 " && playingFields[2][0] != " c1 " && playingFields[2][1] != " c2 " && playingFields[2][2] != " c3 ")
        {
            cout << "Seems we have a draw. Try again!";
            return 0;
        }
        playerTwoTurn(playingFields, initialValues);
        printPlayingFields(playingFields);
        if((playingFields[0][0] == " x " && playingFields[0][1] == " x " && playingFields[0][2] == " x ") || (playingFields[1][0] == " x " && playingFields[1][1] == " x " && playingFields[1][2] == " x ") || (playingFields[2][0] == " x " && playingFields[2][1] == " x " && playingFields[2][2] == " x ") || (playingFields[0][0] == " x " && playingFields[1][1] == " x " && playingFields[2][2] == " x ") || (playingFields[2][0] == " x " && playingFields[1][1] == " x " && playingFields[0][2] == " x "))
        {
            cout << "Player 2 is the winner. Congratulations!\n";
            return 0;
        }
        if(playingFields[0][0] != " a1 " && playingFields[0][1] != " a2 " && playingFields[0][2] != " a3 " && playingFields[1][0] != " b1 " && playingFields[1][1] != " b2 " && playingFields[1][2] != " b3 " && playingFields[2][0] != " c1 " && playingFields[2][1] != " c2 " && playingFields[2][2] != " c3 ")
        {
            cout << "Seems we have a draw. Try again!";
            return 0;
        }
    }
}