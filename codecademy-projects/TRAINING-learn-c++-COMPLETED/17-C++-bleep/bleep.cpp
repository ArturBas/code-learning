#include <iostream>
#include <string>
#include "functions.hpp"
using namespace std;

int main()
{
    string word = "broccoli";
    string text = "la la la broccoli la la la la la la  broccoli  broccoli  broccoli la la la  broccoli  broccoli  broccoli  broccoli  broccoli la la la la la la la  broccoli la la la la la la la la broccoli broccoli la la la la la la la la la la la la la la la broccoli broccoli broccoli broccoli broccoli la la la la la broccoli broccoli la la la la broccoli broccoli broccoli broccoli broccoli broccoli broccoli la la la la la la la la la la la la broccoli la la la ";
    bleep(word, text);
    cout << text << endl;
    return 0;
}