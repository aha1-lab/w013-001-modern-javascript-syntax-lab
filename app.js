const flavors = ['vanilla', 'chocolate', 'strawberry'];
const iceCreamFlavors = flavors.map((flavor) => {
  return `${flavor} ice cream`;
});
console.log(iceCreamFlavors);
// Prints: ['vanilla ice cream', 'chocolate ice cream', 'strawberry ice cream']
// ! Exercise 1:
// a. Use the `map()` method to iterate over the provided `nums` array
//
// b. Use the callback function of the `map()` method you wrote to
//    create a new array where each value is multiplied by 2.
//    Name the new array `numsTimesTwo`.
//
// c. Console log the new array.
//
// Starting code (don't modify this):
const nums = [13, 87, 2, 89, 12, 4, 90, 63];
// Your code here:
const numsTimesTwo = nums.map((num)=>{
    return num*2
})
console.log(numsTimesTwo)
const petsArray = ['Rover', 'Snuffles', 'Toto', 'Spot'];
const [firstPet, secondPet] = petsArray;
console.log(firstPet);
// Prints: 'Rover'
console.log(secondPet);
// Prints: 'Snuffles'
// Equivalent in traditional bracket notation:
console.log(petsArray[0]);
// Prints: 'Rover'
console.log(petsArray[1]);
// Prints: 'Snuffles'


// ! Exercise 2:
// a. Given the provided `pizzaToppings` array, use destructuring to extract
//    the first and second values and place them into variables. Name the
//    variable that corresponds to the first value `firstIngredient`. Name the
//    variable that corresponds to the second value `secondIngredient`.
//
// b. Console log the `firstIngredient` and `secondIngredient` variables.
//
// Starting code (don't modify this):
const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];
// Your code here:
const [firstIngredient, secondIngredient] = pizzaToppings
console.log(firstIngredient ,"\n", secondIngredient)
const person = {
    name: 'Alex',
    role: 'Software Engineer',
  };
  // Object destructuring:
  const { name, role } = person;
  console.log(name);
  // Prints: 'Alex'
  console.log(role);
  // Prints: 'Software Engineer'
  // Equivalent in traditional dot notation:
  console.log(person.name);
  // Prints: 'Alex'
  console.log(person.role);
  // Prints: 'Software Engineer'


// ! Exercise 3:
// a. Given the provided `car` object, use destructuring to create two
//    variables: `make` and `model` that will hold the respective values.
//
// b. Console log the `make` and `model` variables.
//
// Starting code (don't modify this):
const car = {
    make: 'Audi',
    model: 'Q5',
  };
  // Your code here:
const {make: myMake , model: myModel} = car
console.log( myMake , '\n', myModel)
const {make , model} = car
console.log( make , '\n', model)
const originalArray = [1, 2, 3];
const duplicateArray = [...originalArray];
console.log(duplicateArray);
// Prints: [1, 2, 3]
duplicateArray.push(4);
// Using spread created a *copy* of the `originalArray`
// Changing it doesn't also change `originalArray`
console.log(duplicateArray);
// Prints: [1, 2, 3, 4]
console.log(originalArray);
// Prints: [1, 2, 3]
const originalArray2= [1, 2, 3];
const referenceArray = originalArray2
// referenceArray a reference to originalArray (not a copy)
referenceArray.push(4);
// This means modifying `referenceArray` also modifies `originalArray`
console.log(referenceArray);
// Prints: [1, 2, 3, 4]
console.log(originalArray2);
// Prints: [1, 2, 3, 4]
const fruits = ['apple', 'orange', 'banana'];
const vegetables = ['broccoli', 'carrot', 'spinach'];
const fruitsAndVegetables = [...fruits, ...vegetables];
console.log(fruitsAndVegetables);
// Prints: ['apple', 'orange', 'banana', 'broccoli', 'carrot', 'spinach']
// ! Exercise 4:
// a. Duplicate the provided `morePizzaToppings` array using the spread
//    operator and assign it to a variable named `uncontroversialPizzaToppings`.
//
// b. Console log the `uncontroversialPizzaToppings` variable.
//
// Starting code (don't modify this):
const morePizzaToppings = ['Cheese', 'Sauce'];
// Your code here:
const uncontroversialPizzaToppings = [... morePizzaToppings]
console.log(uncontroversialPizzaToppings)
const originalObject = {
    foo: 'Hello',
    bar: 100,
  };
  const clonedObject = { ...originalObject };
  console.log('Clone: ', clonedObject);
  // Prints: { foo: 'Hello', bar: 100 }
  const originalObject2 = {
    foo: 'Hello',
    bar: 100,
  };
  const clonedObject2 = originalObject2;
  clonedObject2.foo = 'Goodbye';
  console.log(originalObject);
  console.log(originalObject2);
  // Prints: { foo: 'Goodbye', bar: 100 }
  const originalObject3 = {
    foo: 'Hello',
    bar: 100,
  };
  // Copy the properties of `originalObject`:
  const clonedObject3 = { ...originalObject3 };
  // Update the properties of `clonedObject`:
  clonedObject3.foo = 'Goodbye';
  clonedObject3.bar = 0;
  console.log('Original: ', originalObject3);
  // Prints: { foo: 'Hello', bar: 100 }
  console.log('Clone: ', clonedObject3);
  // Prints: { foo: 'Goodbye', bar: 0 }
  // ! Exercise 5:
// a. Duplicate the provided `anotherCar` object and spread its values into a
//    new variable named `myCar`.
//
// b. Change the `make` and `model` properties of the `myCar` object to new
//    values.
//
// c. Console log both objects and observe the results.
//
// Starting code (don't modify this):
const anotherCar = {
    make: 'Toyota',
    model: 'RAV4',
  };
  // Your code here:
const myCar = {... anotherCar}
myCar.make= 'nissan'
myCar.model="x-trail"
console.log(anotherCar, '\n', myCar)
const fruitInventory = {
    apples: 2,
    oranges: 4,
  };
  const selectedFruit = 'apples';
  // Using the `selectedFruit` variable as a dynamic key:
  const selectedFruitCount = fruitInventory[selectedFruit];
  console.log(selectedFruitCount);
  // Prints: 2
  const fruitType = 'bananas';
// Using the `fruitType` variable as a dynamic key:
const fruitInventory2 = {
  [fruitType]: 5,
};
console.log(fruitInventory2);
// Prints: { bananas: 5 }
// ! Exercise 6:
// a. Define a variable named `propertyName` and assign a string (like
//    'username', 'age', or 'email') to it.
//
// b. Create an object named `userProfile`.
//
// c. Use `propertyName` as a dynamic key in `userProfile`. Assign it a
//    relevant value.
//
// d. Console log the `userProfile` object to see the result.
//
// Your code here:
const propertyName = 'username'
const userProfile = {
    [propertyName]: "ebrahim"
}
console.log(userProfile)
// ! Exercise 8:
// a. Create a function with two parameters, `noun` and `adjective`.
//
// b. Give `noun` a default value of "cat" and `adjective` a default value of
//    "orange".
//
// c. The function should log a sentence 'The cat is orange.' by default, but
//    should substitute the appropriate parameters when it is supplied with
//    arguments.
//
// Your code here:
const ex8 = (noun="cat", adjective="orange")=>{
    return console.log(`THe ${noun} is ${adjective}.`)
}
ex8("table","blue")
ex8()
// ! Exercise 9:
// a. Convert the following `if...else` statement into a ternary:
//
//    if (pizza === 'tasty') {
//      console.log('yum');
//    } else {
//      console.log('yuck');
//    }
//
// Starting code (don't modify this):
const pizza = 'tasty';
// Your code here:
pizza == 'tasty' ? console.log('yum') : console.log('yuck')
const result1 = 'bar' && 'foo';
const result2 = false || 243;
const result3 = 42 && false;
const result4 = true || 3000;
console.log('result1:', result1);
console.log('result2:', result2);
console.log('result3:', result3);
console.log('result4:', result4);
// ! Exercise 10:
// ! 10.1: Set language
// a. Construct a single line of code that assigns a default value using the
//    logical OR operator. This line should match the logic of the following
//    statement:
//
//    "lang is equal to localLangConfig or the default value of English."
//
// b. Create a variable called `lang`.
//
// c. Assign `lang` the value of localLangConfig or 'en' as a default if
//    `localLangConfig is falsy.
//
// d. Log the value of `lang` to the console.
//
// Your code here (localLangConfig is provided to get you started):
// Simulated language configuration (change this variable to test)
const localLangConfig = "Arabic"; // Change to 'es', 'fr', etc., or leave it `null`.
const lang = localLangConfig || "English"
console.log(lang)
// ! 10.2: Set website theme
// Intro: In this exercise, you'll construct a single line of code that assigns
//        a default value to a variable named `theme` using the logical OR
//        operator. This line should match the logic of the following statement:
//
//        "theme is equal to savedUserTheme or the default value of light."
//
// a. Create a variable called `theme`.
//
// b. Assign `theme` the value of `savedUserTheme` or 'light' as a default.
//
// c. Log the value of `theme` to the console.
//
// Your code here (`savedUserTheme` is provided to get you started):
// Simulated user theme preference (change this variable to test)
const savedUserTheme = null; // Change to 'dark', etc., or leave it `null`.
const theme = savedUserTheme || "light"
console.log(theme)
const adventurer2 = {
    name: 'Alice',
  };
  let dog = adventurer2.dog?.name;
  console.log(dog); // undefined
// ! Exercise 11:
// a. Use optional chaining in a console.log so that a console log of
//    `adventurer.cat.age` returns `undefined` instead of an error.
//
// Starting code (don't modify this):
const adventurer = {
    name: 'Alice',
  };
  let cat = adventurer.cat?.age
  console.log(cat)
  // Your code here: