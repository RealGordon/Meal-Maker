/**
*a program to randomly create a
*three-course meal based on what is available on a menu.
*_author: gordon 
*fscp-javascript-syntax-part-ii*
*/
const menu = {
  _courses: {
    appetizers: [], mains: [], desserts: []
  },
  get appetizers() {
    return this._courses.appetizers
  },
  set appetizers(d) {
    return this._courses.appetizers.push(d)
  },
  get mains() {
    return this._courses.mains
  },
  set mains(d) {
    this._courses.mains.push(d)
  },
  get desserts() {
    return this._courses.desserts
  },
  set desserts(d) {
    this._courses.desserts.push(d)
  },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    }
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    }
    this[courseName].push(dish)
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName]
    return dishes[Math.floor(Math.random() * dishes.length)]
  },

  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = main.price + dessert.price + appetizer.price;

    return `Your meal is ${appetizer.name} for appetizer, ${main.name} for main dish, and ${dessert.name} for dessert.\nThe price is $${totalPrice}.`;
  }
};

//tests
var courses = ['appetizers', 'mains', 'desserts'],
  dishes = {
    appetizers: [['plantainchips', 2], ['malt and biscuits', 7], ['fanta and meat pie', 5]],
    mains: [['fufu and light soup', 10], ['ampesie', 8], ['jollof and chicken', 10]],
    desserts: [['icecream', 5], ['fruit salad', 7],
    ['kelewele', 5]]
  };

courses.forEach((c) => {
  for (const [n, p] of Object.values(dishes[c])) {
    menu.addDishToCourse(c, n, p)
  }
})

const meal=menu.generateRandomMeal();
console.log(meal)
