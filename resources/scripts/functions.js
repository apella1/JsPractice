// pure functions - do not attempt to change their inputs and return the same result for the same parameters
// * all React functions must act as pure functions with respect to their props
// * state allows react components to change their output without violating this rule

function product (a, b) { 
    return a * b
}

console.log(product(4, 45));

// impure functions - change their own inputs 

function withdraw (account, amount) {
    account.total -= amount
}

console.log(withdraw(5000, 4000)); 

// importance of javascript functions: code reusability, less coding thus less complexity of our programs 
// ? javascript function methods 

// Definition of a function
// * a function definition is a regular binding where the value of the binding is a function.

const square =function(x) {
    return x * x
}

console.log(square(11));

// function whose result is a side effect - does not produce any value as the square function 

const makeNoise = function() { 
    console.log('Ping!');
}

// parameters to a regular function behave like a regular binding, but their initial values are given by the caller, not the code in the function itself

// * BINDINGS AND SCOPES 
// each binding has a scope, which is the part of the program for which the binding is visible 
// local and global bindings - in terms of their accessibility
// every time a function is called, new instances of the bindings are formed
// let and const - local to the block they're declared in

const halve = function(n) {
    return n / 2;
}

let n = 20;

console.log(halve(78));

console.log(n);

// when multiple bindings have the same name, code can only see the innermost one.


// * NESTED SCOPE 
// blocks and functions can be created inside other blocks and functions

const hummus = function(factor) {
    const ingredient = function(amount, unit, name) {
        let ingredientAmount = amount * factor;
        if(ingredientAmount > 1) {
            unit += 's';
        }

        console.log(`${ingredientAmount} ${unit} ${name}`);
    }

    console.log(ingredient(1, 'can', 'chickpeas'));
    ingredient(0.25, 'cup', 'tahini');
}

// the code inside the ingredient function can see the factor binding from the outer function 
// * each local scope can see all the local scopes that contain it and all scopes can see the global scope. This approach to binding visibility is called lexical scoping 

// * FUNCTIONS AS VALUES 
// * DECLARATIONS AND ARROW FUNCTIONS 


// * THE CALL STACK  - where computer stores the context of a function 
// storing the context requires space on the computer memory 

function greet (who) { 
    console.log(`Hello ${who}. How are you?`);
}

greet('Harry');
console.log('Bye');

// infinite - maximum call stack size exceeded 
// function chicken() {
//     return egg();
// }

// function egg() {
//     return chicken()
// }

// console.log(chicken() + 'came first');


// * OPTIONAL ARGUMENTS
function cube(x) { 
    return x * x * x
}

console.log(cube(3, true, 'python'));

// js is broadminded. If you pass in fewer arguments than defined, the rest are given a value of undefined. If you pass in extra arguments, they are ignored.

function minus(a, b) { 
    if(b === undefined) {
        return -a
    }
    else return a - b;
}

console.log(minus(10));

console.log(minus(4, 7));

console.log(minus());

// defaulting to a parameter when not defined 

function power (base, exponent = 2) { 
    let result = 1;

    for (let count = 0; count < exponent; count++) {
        result *= base;
    }

    return result;
}

console.log(power(5));

console.log(power(2, 10));