#include <iostream>
#include <string>
#include <vector>
#include "profile.hpp"
using namespace std;

Profile::Profile(string new_name, int new_age, string new_city, string new_country, string new_pronouns)
    : name(new_name), age(new_age), city(new_city), country(new_country), pronouns(new_pronouns)
    {

    }

string Profile::view_profile()
{
    string profile_record 
     = "Name: " + name
     + "\nAge: " + to_string(age)
     + "\nCity: " + city
     + "\nCountry: " + country
     + "\nPronouns: " + pronouns;
    
    string hobbies_string = "\nHobbies:\n";
    for(string hobby : hobbies)
    {
        hobbies_string += "-" + hobby + "\n";
    }
    return profile_record + hobbies_string;
}

void Profile::add_hobby(string new_hobby)
{
    hobbies.push_back(new_hobby);
}