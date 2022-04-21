/*
GOAL:
The Magic 8-Ball (see: https://en.wikipedia.org/wiki/Magic_8-Ball) is a super popular toy used for fortune-telling or seeking advice, developed in the 1950s!

Write a magic8.cpp program that will output a random fortune each time it executes.

The answers inside a standard Magic 8-Ball are:

    - It is certain.
    - It is decidedly so.
    - Without a doubt.
    - Yes - definitely.
    - You may rely on it.
    - As I see it, yes.
    - Most likely.
    - Outlook good.
    - Yes.
    - Signs point to yes.
    - Reply hazy, try again.
    - Ask again later.
    - Better not tell you now.
    - Cannot predict now.
    - Concentrate and ask again.
    - Don't count on it.
    - My reply is no.
    - My sources say no.
    - Outlook not so good.
    - Very doubtful.

For example:
MAGIC 8-BALL:
'It is decidedly so.'

Or:
MAGIC 8-BALL:
'Very doubtful.'
*/

//SOLUTION:
#include <iostream>
#include <string>
using namespace std;

 
int main() {
    
    string question;
    string answers[20] = {
        "It is certain.",
        "It is decidedly so.",
        "Without a doubt.",
        "Yes - definitely.",
        "You may rely on it.",
        "As I see it, yes.",
        "Most likely.",
        "Outlook good.",
        "Yes.",
        "Signs point to yes.",
        "Reply hazy, try again.",
        "Ask again later.",
        "Better not tell you now.",
        "Cannot predict now.",
        "Concentrate and ask again.",
        "Don't count on it.",
        "My reply is no.",
        "My sources say no.",
        "Outlook not so good.",
        "Very doubtful."
    };
    
    //a mechanizm for generating the random answer
    srand(time(NULL));
    string answer = answers[rand() % 20];

    //extending the program to a possibility of typing user's question
    cout << "Type your question:\n";
    cin >> question;
    
    //... and putting a random answer
    cout << answer;

    return 0;
}