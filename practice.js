//defining variables 

let todo1 = 1;
let todo2 = "This is a variable containing a string";
let todo3 = "hello";

// javascript functions 

function addTodo (todoName) { 
    let element = document.createElement('div');
    element.innerText = todoName;
    document.body.appendChild(element);
}

    // calling functions 
        addTodo(todo1);
        addTodo(todo2);
        addTodo(todo3);

// arrays 

let todos = ["Magenta", "Portsmouth", 67, false, 98.433]

// adding elements  to the array todos
todos.push('This is the appended array')

// removing the last element of the array 
todos.pop();

// rendering loops

todos.forEach(function(todoTitle) { 
    let element = document.createElement('div');
    element.innerText = todoTitle;
    document.body.appendChild(element);
});


// variable declaration

var firstName = "Peter";
var age = 4;
age = age + 1; // increments age by one 


// indexing the characters of a string 

var vehicleName = "Toyota";
vehicleName[3]; // displays the fourth character of the variable name as the first character is indexed at zero. 

console.log(vehicleName);


// to escape special characters such as the double quotes used for the strings, the use of a backslash represents the literal represntation of the character 

var textItem = "The dog said to its fried,\"Hey, how are you doing?\"";

// creating a new line within the same line of code 

var quote = "Start any task at hand \n for a task started is a task half done \n then start the other work and thus the task would have been completed"

// the two learnt methods of string concatenation 

var firstName = "Peter";
var lastName = "Johnson";
var age = 33;
var fullName = firstName + lastName;
var myMessage = "My name is " + fullName + " and I am " + age + "years old.";


//method two using backticks 

var myMessage = `My name is ${fullName} and I am ${age} years old.`;
console.log(myMessage);

console.log(document.getElementsByTagName('h1'));

