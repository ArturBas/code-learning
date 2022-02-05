/*
GOAL:
Did you know that giraffes sleep 4.6 hours a day? We humans need more than that. If we don’t sleep enough, we accumulate sleep debt. In this project we’ll calculate if you’re getting enough sleep each week using a sleep debt calculator.

The program will determine the actual and ideal hours of sleep for each night of the last week.

Finally, it will calculate, in hours, how far you are from your weekly sleep goal.
*/

//SOLUTION:

//determine the actual and ideal hours of sleep for each night of the last week

const getSleepHours = (day) => {
  switch(day) {
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 8;
      break;      
    case 'wednesday':
      return 8;
      break;
    case 'thursday':
      return 8;
      break;
    case 'friday':
      return 8;
      break;
    case 'saturday':
      return 8;
      break;
    default:
      return 8;
      break;
  }
}

//Get the total sleep hours that you actually slept

//First version
/* 
const getActualSleepHours = () => {
  return (getSleepHours('monday')
  + getSleepHours('tuesday')
  + getSleepHours('wednesday')
  + getSleepHours('thursday')
  + getSleepHours('friday')
  + getSleepHours('saturday')
  + getSleepHours('sunday'));
}
*/

//'Extra practice' version
const getActualSleepHours = (monday, tuesday, wednesday, thursday, friday, saturday, sunday) => monday + tuesday + wednesday + thursday + friday + saturday + sunday;

//Get the ideal sleep hours that you prefer
//Calculate the sleep debt, if any.

const getIdealSleepHours = idealHours => idealHours * 7;

function calculateSleepDebt () {
  let actualSleepHours = getActualSleepHours(8, 8, 8, 8, 8, 8, 8);
  let idealSleepHours = getIdealSleepHours(8);
  if (actualSleepHours == idealSleepHours) {
    console.log('You got the perfect amount of sleep!');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You got more sleep than needed!');
  } else {
    console.log('You should got some rest!');
  }
}

calculateSleepDebt();