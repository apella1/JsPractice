let todo1 = 1;
let todo2 = "This is a variable containing a string";
let sports = ["Football", "Volleyball"];

// javascript functions

function addTodo(todoName) {
  let element = document.createElement("section"); // creates a div element within the body of the markup
  element.innerText = todoName;
  document.body.appendChild(element);
}

const newTodo = (todo) => {
  let element = document.createElement("div");
  element.innerText = todo;
  document.appendChild(element);
};

// the addTodo function creates an element and adds text to the body
// ? innerText
// ? appendChild - adds the created element to the body of the document i.e the html structure
// ! the hierarchy of the document object.
// * every element in javascript is an object - object data type. all the other data types can be objects when declared by the new keyword.

// calling functions or revoking functions
console.log(addTodo(todo1));

addTodo(todo2);

let todos = ["Magenta", "Portsmouth", "Blue", 67, false, 98.433];

console.log(todos);

// adding elements to the end of the array. This is the same as adding an element to the index after the last index of the array
todos.push("This is the appended array");

console.log(todos);

// removing the last element of the array
todos.pop();

// rendering loops - array methods

todos.forEach((todoTitle) => {
  let element = document.createElement("section");
  element.innerText = todoTitle;
  document.body.appendChild(element); // appending elements to the body of the document
});

todos.forEach((todoTitle) => {
  let element = document.createElement("div");
  element.innerText = todoTitle;
  document.body.appendChild(element);
});

// variable declaration

var firstName = "Peter";
var age = 4;
age = age + 1; // increments age by one - changing the value of the predefined variable.

console.log(age);

// indexing the characters of a string

var vehicleName = "Toyota";
console.log(vehicleName[3]); // displays the fourth character of the variable name as the first character is indexed at zero.

console.log(vehicleName);

// escaping characters

var textItem = 'The dog said to its fried,"Hey, how are you doing?"';

// creating a new line

var quote =
  "Start any task at hand \n for a task started is a task half done \n then start the other work and thus the task would have been completed";

console.log(quote);

// string concatenation

var firstName = "Peter";
var lastName = "Johnson";
var age = 33;
var fullName = firstName + lastName;
var myMessage = "My name is " + fullName + " and I am " + age + "years old."; // the use of backticks is more efficient compared to the traditional method of string concatenation

var myMessage = `My name is ${fullName} and I am ${age} years old.`;
console.log(myMessage);

console.log(document.getElementsByTagName("h1"));

// classes
class Animal {
  constructor(type, lifeSpan) {
    this.type = type;
    this.lifeSpan = lifeSpan;
  }

  animalSummary() {
    return `${this.type} has a lifespan of ${this.lifeSpan} years.`;
  }
}

const dog = new Animal("Dog", 8);

console.log(dog.animalSummary());
