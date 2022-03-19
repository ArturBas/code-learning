#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <windows.h>

/*
On your mark, get set, GO! Using structures and the rest of your C knowledge we’ll be creating a race simulator.

First we’ll define our complex data types using structures. Then we’ll create some fun print functions to help update our audience. Finally, we’ll implement functions to help with the racing logic and start our race!
*/

// Structures section
struct Race {
  int numberOfLaps;
  int currentLap;
  char *firstPlaceDriverName;
  char *firstPlaceRaceCarColor;
};

struct RaceCar {
  char *driverName;
  char *raceCarColor;
  int totalLapTime;
};

// Print functions section
void printIntro() {
  printf("Welcome to our main event digital race fans!\n");
  Sleep(2000);
  printf("I hope everybody has their snacks because we are about to begin!\n");
  Sleep(3000);
}

void printCountDown() {
  printf("Racers Ready!\n");
  Sleep(2000);
  printf("In...\n");
  Sleep(1000);
  for(int i = 5; i > 0; i--) {
    printf("%d\n", i);
    Sleep(1000);
  }
  printf("Race!");
}

void printFirstPlaceAfterLap(struct Race race) {
  for(int j = 0; j < race.numberOfLaps; j++) {
    printf("After lap number %d\nFirst Place Is: %s in the %s race car!\n", race.currentLap, race.firstPlaceDriverName, race.firstPlaceRaceCarColor);
  }
}

void printCongratulation(struct Race race) {
  Sleep(2000);
  printf("Let's all congratulate %s in the %s race car for an amazing performance.\n", race.firstPlaceDriverName, race.firstPlaceRaceCarColor);
  Sleep(2000);
  printf("It truly was a great race and everybody have a goodnight!\n");
}

// Logic functions section

int calculateTimeToCompleteLap(void) {
  int lowerLimit = 1, upperLimit = 4;
  int speed = lowerLimit + rand() % (upperLimit - lowerLimit);
  int acceleration = lowerLimit + rand() % (upperLimit - lowerLimit);
  int nerves = lowerLimit + rand() % (upperLimit - lowerLimit);
  return speed + acceleration + nerves;
}

void updateRaceCar(struct RaceCar* raceCar) {
  (*raceCar).totalLapTime += calculateTimeToCompleteLap();
}

void updateFirstPlace(struct Race* race, struct RaceCar* raceCar1, struct RaceCar* raceCar2) {
  if((*raceCar1).totalLapTime <= (*raceCar2).totalLapTime) {
    (*race).firstPlaceDriverName = (*raceCar1).driverName;
    (*race).firstPlaceRaceCarColor = (*raceCar1).raceCarColor;
  } else {
    (*race).firstPlaceDriverName = (*raceCar2).driverName;
    (*race).firstPlaceRaceCarColor = (*raceCar2).raceCarColor;    
  }
}

void startRace(struct RaceCar* raceCar1, struct RaceCar* raceCar2) {
  struct Race race = {5, 1, "", ""};
  for (int k = 0; k <= race.numberOfLaps; k++) {
    updateRaceCar(raceCar1);
    updateRaceCar(raceCar2);
    updateFirstPlace(&race, raceCar1, raceCar2);
  }
  printCongratulation(race);
}

int main() {
	struct RaceCar thunderCar = {"John", "blue", 37};
  struct RaceCar flashCar = {"Ally", "red", 39};  
  printIntro();
  printCountDown();
  srand(time(0));
  startRace(&thunderCar, &flashCar);
};