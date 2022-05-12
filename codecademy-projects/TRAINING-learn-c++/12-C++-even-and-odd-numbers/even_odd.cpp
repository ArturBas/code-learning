/*
GOAL:
Write a program to find the sum of even numbers and the product of odd numbers in a vector.

For example:

Suppose we have a vector that is {2, 4, 3, 6, 1, 9}.

Then the program should output:

"Sum of even numbers is 12"
"Product of odd numbers is 27"
*/


//SOLUTION:
#include <iostream>
#include <vector>
#include <numeric>
using namespace std;


int main()
{
    //declare a vector
    vector<int> rand_vector;
    
    //initialize the vector with five of random integers betwenn 0-9
    srand(time(NULL));
    for(auto i = 0; i < 5; i++) 
        rand_vector.push_back(rand() % 10);     
    
    //print out the vector values
    cout << "Vector values are ";
    for (auto j = rand_vector.begin(); j != rand_vector.end(); ++j) { 
        cout << *j << " ";
    }

    //find the sum of even numbers
    int sum_of_even = 0;
    int product_of_odd = 1;
    for(auto k = 0; k < rand_vector.size(); ++k) {
        if(rand_vector[k] % 2 == 0) {
            sum_of_even += rand_vector[k];
        } else {
            product_of_odd *= rand_vector[k];
        }
    }

    //print results
    cout << "\nSum of even numbers is " << sum_of_even << "\n" << "Product of odd numbers is " << product_of_odd << "\n";

    return 0;
}
