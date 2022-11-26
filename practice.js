//defining variables 
// the scope and binding of variable declaration with let, const and var 
// let and const are local to the block they are declared in
// var is declared globally 

let todo1 = 1;
let todo2 = "This is a variable containing a string";
let sports = ['Football', 'Volleyball'];

// javascript functions 
// the below function is a declarative function where the function name is given and the parameters passed in
// parameters are local bindings created by the function 

function addTodo (todoName) { 
    let element = document.createelement('section');  // creates a div element within the body of the markup
    element.innertext = todoname;
    document.body.appendchild(element);
}

const newtodo = (todo) => {
	let element = document.createelement('div');
	element.innertext = todo;
	document.appendchild(element);
}

// the addtodo function creates an element and adds text to the body
// ? innertext
// ? appendchild - adds the created element to the body of the document i.e the html structure 
// ! the hierarchy of the document object. 
// * every element in javascript is an object - object is javascript data type. all the other data types can be objects when declared by the new keyword.

// calling functions or revoking functions 
    console.log(addTodo(todo1));
    addTodo(todo2);

// arrays can contain different data types within the same block.
// this is different for statically typed languages as the data types within the arrays are statically declared.
// through typescript javascript allows for type declaration. 

let todos = ["Magenta", "Portsmouth", 'Blue', 67, false, 98.433];

console.log(todos);

// adding elements to the end of the array. This is the same as adding an element to the index after the last index of the array 
todos.push('This is the appended array');

console.log(todos);

// removing the last element of the array 
todos.pop();

// rendering loops - array methods

todos.forEach((todoTitle) => { 
    let element = document.createElement('section');
    element.innerText = todoTitle;
    document.body.appendChild(element);                // appending elements to the body of the document 
});


todos.forEach( (todoTitle) => {
    let element = document.createElement("div");
    element.innerText = todoTitle;
    document.body.appendChild(element);
}
); 

// variable declaration

var firstName = "Peter";
var age = 4;
age = age + 1; // increments age by one - changing the value of the predefined variable.

console.log(age);


// indexing the characters of a string 

var vehicleName = "Toyota";
console.log(vehicleName[3]); // displays the fourth character of the variable name as the first character is indexed at zero. 

console.log(vehicleName);

// to escape special characters such as the double quotes used for the strings, the use of a backslash represents the literal representation of the character 

var textItem = "The dog said to its fried,\"Hey, how are you doing?\"";

// creating a new line within the same line of code 

var quote = "Start any task at hand \n for a task started is a task half done \n then start the other work and thus the task would have been completed"

console.log(quote);

// methods of string concatenation - using + and using backticks

var firstName = "Peter";
var lastName = "Johnson";
var age = 33;
var fullName = firstName + lastName;
var myMessage = "My name is " + fullName + " and I am " + age + "years old."; // the use of backticks is more efficient compared to the traditional method of string concatenation 

//method two using backticks 

var myMessage = `My name is ${fullName} and I am ${age} years old.`;
console.log(myMessage);

console.log(document.getElementsByTagName('h1')); // displays the h1 elements selected 

class Animal {
	constructor(type, lifeSpan) {
		this.type = type;
		this.lifeSpan = lifeSpan;
	}

	animalSummary() {
		return `${this.type} has a lifespan of ${this.lifeSpan} years.`
	}
}

const dog = new Animal('Dog', 8)

console.log(dog.animalSummary())

