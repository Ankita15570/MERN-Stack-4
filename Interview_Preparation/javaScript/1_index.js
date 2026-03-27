console.log("Hello, World!");
// This is a simple JavaScript program that prints "Hello, World!" to the console.

// Variables
let name = "Ankita Patil";
const age = 19;
var city = "Karad";

// Functions
function greet() {
  console.log("Welcome to JavaScript programming!");
}
greet();

// Arrow function
const add = () => {
  return 5 + 3;
};
console.log("The sum of 5 and 3 is: " + add());

// Parameters and arguments
function multiply(a, b) {
  return a * b;
}
console.log("The product of 5 and 3 is: " + multiply(5, 3));

// Objects
const person = {
  name: "Ankita Patil",
  age: 19,
  city: "Karad",
  greet: function () {
    console.log("Hello, I am " + this.name);
  },
};

person.greet();

// Arrays
const fruits = ["Apple", "Banana", "Cherry"];
console.log("Fruits: " + fruits.join(", "));
