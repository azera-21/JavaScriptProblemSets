/*
Meal Maker
As a frequent diner, you love trying out new restaurants and experimenting with different foods. However, having to figure out what you want to order can be a time-consuming ordeal if the menu is big, and you want an easier way to be able to figure out what you are going to eat.

In this project, you’ll use JavaScript to randomly create a three-course meal based on what is available on a menu. We’ll keep running it until we’re satisfied with the generated meal!
*/

// Created an empty object called menu
const menu = {

  //  Added a courses property to the menu
  _courses: {

    // Created three properties inside the courses meny and set them to initialise to an empty array
    appetizers: [],
    mains: [],
    desserts: []
  },

  // Created getter and setter methods for appetizers, mains and desserts
  get appetizers() {
    return this._courses.appetizers;
  },
  set appetizers(appetizersIn) {
    this._courses.appetizers = appetizersIn;
  },
  get mains() {
    return this._courses.mains;
  },
  set mains(mainsIn) {
    this._courses.mains = mainsIn;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set desserts(dessertsIn) {
    this._courses.desserts = dessertsIn;
  },

  // Created a getter method for _courses property
  get courses() {

      // Returned an object within getter method that contains key/value pairs for appetizers, mains and desserts
      return {
        appetizers: this.appetizers, // this essentially uses the appetizer getter method
        mains: this.mains,
        desserts: this.desserts
      }
    },

  // Created a method that will be used to add a new dish to the specified course on the menu
  addDishToCourse(courseName, dishName, dishPrice) {
      
      // Created an object within method that has name and price as parametrs and then pushed it to the appropriate course based on the courseName (adding it the the correct array)
      const dish = {
        name: dishName,
        price: dishPrice
      }

      this._courses[courseName].push(dish);
  },

  // Created a function that will allows us to get a random dish from a course on the menu
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName]; 
    const dishesIndex = Math.floor(Math.random() * dishes.length);
    return dishes[dishesIndex];
  },

  // Created a random meal function
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;

    return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}. The price is $${totalPrice}.`;
  }

}

// Added meals
menu.addDishToCourse('appetizers', 'Soup', 5);
menu.addDishToCourse('appetizers', 'Garlic Bread', 4);
menu.addDishToCourse('appetizers', 'Salmon', 7);
menu.addDishToCourse('mains', 'Cottage Pie', 12);
menu.addDishToCourse('mains', 'Burger and Chips', 12);
menu.addDishToCourse('mains', 'Veggie Bangers and Mash', 11);
menu.addDishToCourse('desserts', 'Ice Cream', 4);
menu.addDishToCourse('desserts', 'Cheese Board', 7);
menu.addDishToCourse('desserts', 'Sorbet', 4);

let meal = menu.generateRandomMeal();

console.log(meal);




