//defining variables 
// the scope and binding of variable declaration with let, const and var 
// let and const are local to the block they are declared in
// var is declared globally 

let todo1 = 1;
let todo2 = "This is a variable containing a string";

// javascript functions 
// the below function is a declarative function where the function name is given and the parameters passed in

function addTodo (todoName) { 
    let element = document.createElement('section');  // creates a div element within the body of the markup
    element.innerText = todoName;
    document.body.appendChild(element);
}

// the addTodo function creates an element and adds text to the body
// ? innerText
// ? appendChild
// ! the hierarchy of the document object. 
// * Every element in javascript is an object?  

// calling functions, also known as revoking functions 
    console.log(addTodo(todo1));
    addTodo(todo2);

// arrays can contain different data types within the same block. This is different compared to other languages as arrays only contain data of the same type as elements. 

let todos = ["Magenta", "Portsmouth", 67, false, 98.433];

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
age = age + 1; // increments age by one 


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