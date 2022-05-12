#include <iostream>
#include <string>
using namespace std;

int main()
{
    string storyline[5] = {
        "FEAR", 
        "Nearly every morning, a certain woman in our community comes running out of her house with her face white and her overcoat flapping wildly. She cries out, “Emergency, emergency,” and one of us runs to her and holds her until her fears are calmed. We know she is making it up; nothing has really happened to her.", 
        "But we understand, because there is hardly one of us who has not been moved at some time to do just what she has done, and every time, it has taken all our strength, and even the strength of our friends and families too, to quiet us.", 
        "But this day was different. Something has changed. We felt it in the air - like a promise of a big thing what was going to happen. This day, she were right. We noticed it on the horizon late afternoon. It was coming - powerfull, dignified and calm. The cyclon.", 
        "But, this time, we were not able to calm her down. She were like a fire which exploed with a new flame in another place everytime when you think that you beat it. It took a lot of time, too long. We watched in silence as the ambulance departed. No one said it aloud, but everyone asked himself with the same, one question: shall she come back yet?"
    };
    
    string userAnswer1;
    int userAnswer2;

    cout << "Do you want to read a story? (y/n)\n";
    cin >> userAnswer1;

    if(userAnswer1 == "y") {
        for(int i = 0; i < 2; i++) {
            cout << storyline[i] << "\n";
        }
    } else if(userAnswer1 == "n") {
        cout << "Your loss. Bye!\n";
        exit(0);
    } else {
        cout << "Incorrect input. Run the program again.\n";
        exit(0);
    }

    cout << "Please choose one of three optional endings (1/2/3)\n";
    cin >> userAnswer2;

    switch (userAnswer2)
    {
    case 1:
        cout << storyline[2] << "\n";
        break;
    case 2:
        cout << storyline[3] << "\n";
        break;
    case 3:
        cout << storyline[4] << "\n";
        break;
    default:
        cout << "Incorrect input. Run the program again.\n";
        exit(0);
    }
    
    cout << "Are you sarisfied with this story ending? (y/n)\n";
    cin >> userAnswer1;

    if(userAnswer1 == "y") {
        cout << "I am glad to hear that. See you again!\n";
    } else if(userAnswer1 == "n") {
        cout << "You can choose another one. Please, run the program again.\n";
    } else {
        cout << "Type y or n\n";
    }

    return 0;
}