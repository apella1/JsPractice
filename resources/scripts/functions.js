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
// global 