/*
GOAL:

As a seasoned athlete, one of your favorite activities is running marathons. You use a service called Training Days that sends you a message for the event you signed up for and the days you have left to train.

Since you also code, Training Days has asked you to help them solve a problem: The program currently uses the wrong scope for its variables. They know this can be troublesome as their service evolves. In this project you will make Training Days more maintainable and less error-prone by fixing variable scopes.
*/

//SOLUTION:

const getRandEvent = () => {
    const random = Math.floor(Math.random() * 3);
    if (random === 0) {
      return 'Marathon';
    } else if (random === 1) {
      return 'Triathlon';
    } else if (random === 2) {
      return 'Pentathlon';
    }
  };
  
  const event = getRandEvent();
  const event2 = getRandEvent();
  
  const getTrainingDays = event => {
    let days;
    if (event === 'Marathon') {
      days = 50;
    } else if (event === 'Triathlon') {
      days = 100;
    } else if (event === 'Pentathlon') {
      days = 200;
    }
    return days;
  };
  
  const days = getTrainingDays(event);
  const days2 = getTrainingDays(event2);
  
  const name = 'Nala';
  const name2 = 'Warren';
  
  const logEvent = (name, event) => {
    console.log(`${name}'s event is: ${event}`);
  };
  
  const logTime = (name, days) => {
    console.log(`${name}'s time to train is: ${days} days`);
  };
  
  logEvent(name, event);
  logTime(name, days);
  logEvent(name2, event2);
  logTime(name2, days2);  