#include <iostream>
#include <string>
using namespace std;

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

void playerTurn(string player, string playerChoice, string playerMarker, string playingFields[3][3], string initialValues[])
{
    bool inRange = false;
    while(playingFields[0][0] == " a1 " || playingFields[0][1] == " a2 " || playingFields[0][2] == " a3 " || playingFields[1][0] == " b1 " || playingFields[1][1] == " b2 " || playingFields[1][2] == " b3 " || playingFields[2][0] == " c1 " || playingFields[2][1] == " c2 " || playingFields[2][2] == " c3 ")
    {
        cout << player << ": Type your choice\n";
        cin >> playerChoice;
        playerChoice = " " + playerChoice + " ";
        for(int x=0;x<3;x++)
        {
            for(int y=0;y<3;y++)
            {
                if(playingFields[x][y] == playerChoice && playerChoice != " x " && playerChoice != " o ")
                {
                    inRange = true;
                }
            }
        }
        if(inRange)
        {
            for(int x=0;x<3;x++)
            {
                for(int y=0;y<3;y++)
                {
                    if(playingFields[x][y] == playerChoice)
                    {
                        playingFields[x][y] = playerMarker;
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

void isWinner(string player, string playerMarker, string playingFields[3][3])
{
    if((playingFields[0][0] == playerMarker && playingFields[0][1] == playerMarker && playingFields[0][2] == playerMarker) || (playingFields[1][0] == playerMarker && playingFields[1][1] == playerMarker && playingFields[1][2] == playerMarker) || (playingFields[2][0] == playerMarker && playingFields[2][1] == playerMarker && playingFields[2][2] == playerMarker) || (playingFields[0][0] == playerMarker && playingFields[1][1] == playerMarker && playingFields[2][2] == playerMarker) || (playingFields[2][0] == playerMarker && playingFields[1][1] == playerMarker && playingFields[0][2] == playerMarker))
        {
            cout << player << " is the winner. Congratulations!\n";
            exit(0);
        }
}

void isDraw (string playingFields[3][3])
{
    if(playingFields[0][0] != " a1 " && playingFields[0][1] != " a2 " && playingFields[0][2] != " a3 " && playingFields[1][0] != " b1 " && playingFields[1][1] != " b2 " && playingFields[1][2] != " b3 " && playingFields[2][0] != " c1 " && playingFields[2][1] != " c2 " && playingFields[2][2] != " c3 ")
        {
            cout << "Seems we have a draw. Try again!";
            exit(0);
        }
}