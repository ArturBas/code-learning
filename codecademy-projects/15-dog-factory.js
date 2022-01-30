/*
GOAL:

1. Write a function, dogFactory(). It should:
    - have 3 parameters: name, breed, and weight (in that order)
    - expect name and breed to be strings
    - expect weight to be a number
    - return an object
    - have each of those parameters as keys on the returned object returned with the values of the arguments that were passed in:
      dogFactory('Joe', 'Pug', 27)
      // Should return { name: 'Joe', breed: 'Pug', weight: 27 }

2. Add getters and setters for each of the three properties and change the property names to have an underscore prepended.

3. Add two methods to your object: .bark() which returns ‘ruff! ruff!’ and .eatTooManyTreats() which should increment the weight property by 1.
*/

//SOLUTION:

const dogFactory = (name, breed, weight) => {
	let newDog = {    
  	_name: name,
  	_breed: breed,
  	_weight: weight,
    get name() {
      return this._name;
    },
    get breed() {
      return this._breed;
    },
    get weight() {
      return this._weight;
    },
    set name(newName) {
      this._name = newName;
    },
    set breed(newBreed) {
      this._breed = newBreed;
    },
    set weight(newWeight) {
      this._weight = newWeight;
    },
    bark() {
      return 'ruff! ruff!'
    },
    eatTooManyTreats() {
      this._weight++;
    }
	}
  return (typeof newDog._name === 'string'
    && typeof newDog._breed === 'string' 
    && typeof newDog._weight === 'number') 
    ? newDog 
    : 'Name and breed must be strings, weight must be a number';
}

console.log(dogFactory("Joe", 'Pug', 27));

