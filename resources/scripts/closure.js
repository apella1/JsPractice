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