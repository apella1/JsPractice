// ? what happens to the local bindings when the function call that created them is no longer active

// * closure is being able to reference a specific instance of a local binding in an enclosing
// * a closure is a function that references bindings from local scopes around it

function multiplier(factor) {
  return (number) => number * factor;
}

let double = multiplier(2);
let thrice = multiplier(3);
let sameNumber = multiplier(1);

console.log(double());
console.log(thrice(6));
console.log(double(4));
console.log(sameNumber(6));

// * lexical scoping -  how a parser resolves variable names when functions are nested

function introduceUser() {
  let name = "Michael";

  function displayName() {
    console.log(name);
  }

  displayName();
}

introduceUser();

// inner functions can only be accessed inside of the function that created them

function makeFunc() {
  let name = "Peter";

  function showName() {
    return name;
  }

  return showName;
}

const myFunc = makeFunc();

console.log(myFunc());

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add6 = makeAdder(6);
const add4 = makeAdder(4);

console.log(add6(5));

// both add6 and add4 are closures which store different lexical environments
// makeAdder is a function factory

