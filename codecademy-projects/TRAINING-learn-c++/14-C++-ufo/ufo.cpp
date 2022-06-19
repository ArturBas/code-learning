#include <iostream>
#include "ufo_functions.hpp"
#include <string>
using namespace std;

int main() {
    string codeword = "codecademy";
    string answer = "__________";
    int misses = 0;
    vector<char> incorrect;
    bool guess = false;
    char letter;

    greet();
    while (answer != codeword && misses < 7)
    {
        display_misses(misses);
        display_status(incorrect, answer);
        cout << "Please enter your guess:\n";
        cin >> letter;
        for(int k = 0; k < codeword.length(); k++)
        {
            if(letter == codeword[k])
            {
                answer[k] = letter;
                guess = true;
            }
        }
        if(guess == true)
        {
            cout << "Correct!\n";
        }
        else
        {
            cout << "Incorrect! The tractor beam pulls the person in further.\n";
            incorrect.push_back(letter);
            misses++;
        }
        guess = false;
    }
    end_game(answer, codeword);
}