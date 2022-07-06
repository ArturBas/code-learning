#include <iostream>
#include <string>
#include "functions.hpp"
using namespace std;

void bleep(string word, string &text)
{
    string temp = text;
    int i = 0;
    int counter = 0;
    for(i; i < temp.length(); i++)
    {
        if(temp.substr(i, 8) == word)
        {
            temp.replace(i, 8, "********");
        }
    }
    text = temp;
    cout << text << endl;
}