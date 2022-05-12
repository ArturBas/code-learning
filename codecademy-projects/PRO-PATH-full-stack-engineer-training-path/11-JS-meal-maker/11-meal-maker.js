/*
GOAL:

As a frequent diner, you love trying out new restaurants and experimenting with different foods. However, having to figure out what you want to order can be a time-consuming ordeal if the menu is big, and you want an easier way to be able to figure out what you are going to eat.

In this project, you’ll use JavaScript to randomly create a three-course meal based on what is available on a menu. We’ll keep running it until we’re satisfied with the generated meal!
*/

//SOLUTION:

const menu = {
    _courses: {
      _appetizers: [],
      _mains: [],
      _desserts: [],
      get appetizers() {
        return this._appetizers;
      },
      get mains() {
        return this._mains;
      },
      get desserts() {
        return this._desserts;
      },
      set appetizers(newAppetizers) {
        this._appetizers = newAppetizers;
      },
      set mains(newMains) {
        this._mains = newMains;
      },
      set desserts(newDesserts) {
        this._desserts = newDesserts;
      }
    },
    get courses() {
      return this._courses;
    },
    addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice
      };
      this.courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
      const dishes = this.courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
    },
    generateRandomMeal() {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');    
      const dessert = this.getRandomDishFromCourse('desserts');
      return `Meal proposal:
      > appetizer: ${appetizer.name},
      > main: ${main.name},
      > dessert: ${dessert.name}.
      Total price is €${appetizer.price + main.price + dessert.price}.`;
    }
  }
  
  //Checking code executability
  menu.addDishToCourse('appetizers', 'bruschetta', 2);
  menu.addDishToCourse('appetizers', 'coco-soup', 3);
  menu.addDishToCourse('appetizers', 'butternut hummus', (1.5));
  menu.addDishToCourse('mains', 'pizza quattro formaggi', 6);
  menu.addDishToCourse('mains', 'spaghetti bolognese', 7);
  menu.addDishToCourse('mains', 'cardamon maple salmon', (9.5));
  menu.addDishToCourse('desserts', 'choco-pudding', 2);
  menu.addDishToCourse('desserts', 'ice-cream', 1);
  menu.addDishToCourse('desserts', 'apple pie', (3.5));
  
  const meal = menu.generateRandomMeal();
  console.log(meal);