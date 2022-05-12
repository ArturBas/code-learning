/* GOAL:

You may have played Rock, Paper, Scissors, but have you played Rock, Paper, Scissors, Lizard, Spock (see: https://www.youtube.com/watch?v=iSHPVCBsnLw)? This is the infamous game brought to popularity with the TV show The Big Bang Theory.

Rules:
    - scissors cuts paper, 
    - paper covers rock, 
    - rock crashes lizard,
    - lizard poisons spock, 
    - pock mashes scissors, 
    - scissors decapitates lizard, 
    - lizard eats paper, 
    - paper disprove pock, 
    - pock vaporizes rock, 
    - rock crushes scissors. 
    
Write a rock_paper_scissors.cpp program that:

    1. Prompts the user to select either Rock, Paper, Scissors, Lizard, or Spock.
    2. Instructs the computer to randomly select either Rock, Paper, Scissors, Lizard, or Spock.
    3. Compares the user’s choice and the computer’s choice and determine the winner.
    4. Informs the user who the winner is.
*/

//SOLUTION:
#include <iostream>
#include <stdlib.h>
#include <string>
using namespace std;

int main() {

    string chooses[5] = {"Rock", "Paper", "Scissors", "Lizard", "Pock"};

    srand(time(NULL));
    string computer = chooses[rand() % 5];

    string user;

    cout << "====================\n";
    cout << "Rock Paper Scissors Lizard Pock!\n";
    cout << "====================\n";

    for(int i = 0; i < 5; i++) {
        cout << "==> " << chooses[i] << "\n";    
    }
    
    cout << "Shoot! ";

    cin >> user;

    if(user == "Rock" || user == "Paper" || user == "Scissors" || user == "Lizard" || user == "Pock") {
        if((computer == "Rock" && user == "Rock") || (computer == "Paper" && user == "Paper") || (computer == "Scissors" && user == "Scissors")) {
            cout << "Draw! Try once again!";
        } else if((computer == "Scissors" && user == "Paper") || (computer == "Paper" && user == "Rock") || (computer == "Rock" && user == "Lizard") || (computer == "Lizard" && user == "Spock") || (computer == "Pock" && user == "Scissors") || (computer == "Scissors" && user == "Lizard") || (computer == "Lizard" && user == "Paper") || (computer == "Paper" && user == "Pock") || (computer == "Pock" && user == "Rock") || (computer == "Rock" && user == "Scissors")) {
            cout << "You lost! Try once again!";
        } else {
            cout << "You won!";
        }
    } else {
        cout << "Incorrect input data. Try once again!";
    }
    return 0;
}

