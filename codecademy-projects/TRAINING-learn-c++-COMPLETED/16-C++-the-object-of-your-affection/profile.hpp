#include <iostream>
#include <string>
#include <vector>
#include <iterator>
using namespace std;

class Profile 
{    
    private:
        string name, city, country, pronouns;
        int age;
        vector<string> hobbies;

    public:
        Profile(string new_name, int new_age, string new_city, string new_country, string new_pronouns);
        string view_profile();
        void add_hobby(string new_hobby);
};