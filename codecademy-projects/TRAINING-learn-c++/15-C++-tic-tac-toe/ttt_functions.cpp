#include <iostream>
#include <string>
using namespace std;

void welcome(char readyToPlay)
{
    cout << "===========\nTIC TAC TOE\n===========\nHello! The game is dedicated to two players. When playing fields are printed, player one is selecting one of them by typing its ID (from a1 to c3). The choice will be marked by the letter 'o'. Then, the player two is choicing its type what will be marked by the letter 'x'. The sequence is reapited until ony of players win or until there is no more possibility to win at all. Winning the game means being the first in placing three of o- or x-marks in a horizontal, vertical or diagonal row.\nAre you ready? y/n\n";
}
void createPlayingFields(string playingFields[3][3], string initialValues[])
{
    int i = 0;
    for(int x=0;x<3;x++)
    {
        for(int y=0;y<3;y++)
        {
            playingFields[x][y] = initialValues[i];
            i++;
        }
    }
}
void printPlayingFields(string playingFields[3][3])
{
    for(int x=0;x<3;x++)
    {
        for(int y=0;y<3;y++)
        {
            cout<<playingFields[x][y];
        }
        cout << endl;
    }
}

void playerOneTurn(string playingFields[3][3], string initialValues[])
{
    string playerOneChoice;
    while(playingFields[0][0] == " a1 " || playingFields[0][1] == " a2 " || playingFields[0][2] == " a3 " || playingFields[1][0] == " b1 " || playingFields[1][1] == " b2 " || playingFields[1][2] == " b3 " || playingFields[2][0] == " c1 " || playingFields[2][1] == " c2 " || playingFields[2][2] == " c3 ")
    {
        cout << "Player 1: Type your choice\n";
        cin >> playerOneChoice;
        playerOneChoice = " " + playerOneChoice + " ";
        bool inRange1 = false;
        for(int x=0;x<3;x++)
        {
            for(int y=0;y<3;y++)
            {
                if(playingFields[x][y] == playerOneChoice)
                {
                    inRange1 = true;
                }
            }
        }
        if(inRange1)
        {
            for(int x=0;x<3;x++)
            {
                for(int y=0;y<3;y++)
                {
                    if(playingFields[x][y] == playerOneChoice)
                    {
                        playingFields[x][y] = " o ";
                    }
                }
            }
            break;
        }
        else
        {
            cout << "You must type one of following IDs: ";
            for(int x=0;x<3;x++)
            {
                for(int y=0;y<3;y++)
                {
                    if(playingFields[x][y] != " o " && playingFields[x][y] != " x ")
                    {
                        cout << playingFields[x][y];
                    }
                }
            }
            cout << "\n";
        }
    }
}

void playerTwoTurn(string playingFields[3][3], string initialValues[])
{
    string playerTwoChoice;
    while(playingFields[0][0] == " a1 " || playingFields[0][1] == " a2 " || playingFields[0][2] == " a3 " || playingFields[1][0] == " b1 " || playingFields[1][1] == " b2 " || playingFields[1][2] == " b3 " || playingFields[2][0] == " c1 " || playingFields[2][1] == " c2 " || playingFields[2][2] == " c3 ")
    {
        cout << "Player 2: Type your choice\n";
        cin >> playerTwoChoice;
        playerTwoChoice = " " + playerTwoChoice + " ";
        bool inRange2 = false;
        for(int x=0;x<3;x++)
        {
            for(int y=0;y<3;y++)
            {
                if(playingFields[x][y] == playerTwoChoice)
                {
                    inRange2 = true;
                }
            }
        }
        if(inRange2)
        {
            for(int x=0;x<3;x++)
            {
                for(int y=0;y<3;y++)
                {
                    if(playingFields[x][y] == playerTwoChoice)
                    {
                        playingFields[x][y] = " x ";
                    }
                }
            }
            break;
        }
        else
        {
            cout << "You must type one of following IDs: ";
            for(int x=0;x<3;x++)
            {
                for(int y=0;y<3;y++)
                {
                    if(playingFields[x][y] != " o " && playingFields[x][y] != " x ")
                    {
                        cout << playingFields[x][y];
                    }
                }
            }
            cout << "\n";
        }
    }    
}
