// *  CLOSURE 
// treating functions as values, local bindings are recreated every time a function is called. 
// ? what then happens to the local bindings when the function call that created them is no longer active

// * closure is being able to reference a specific instance of a local binding in an enclosing 
// * a closure is a function that references bindings from local scopes around it 

function wrapValue(n) {
    let local = n;
    return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);

console.log(wrap1);
console.log(wrap2);


function multiplier(factor) { 
    return number => number * factor
}

let thrice = multiplier(3);
console.log(thrice(6));


// a parameter is itself a local binding 
// when called, the function body sees the environment in which it was created, not called.


// * lexical scoping -  how a parser resolves variable names when functions are nested  

function introduceUser() {
    let name = 'Michael'  // name is a local variable created by introduceUser();

    function displayName() {
        // displayName() is the closure - the inner function 
        console.log(name); // uses a variable declared in the parent function 
    }

    displayName();

}

introduceUser();

// * inner  functions have access to the variables of the outer functions
// inner functions can only be accessed inside of the function that created them 

function makeFunc() {
    let name = 'Peter';

    function showName() {
        return name;
    }

    return showName;
}

const myFunc = makeFunc();

console.log(myFunc());



function makeAdder(x) {
    return function(y) {
        return x + y;
    }
}

const add6 = makeAdder(6);
const add4 = makeAdder(4);

console.log(add6(5));

// both add6 and add4 are closures which store different lexical environments i.e in add4, the value of x is 4
// makeAdder is a function factory 

