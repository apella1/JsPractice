// the total number of supported data types in js is 8: symbol, number, string, object, undefined, boolean, null, BigInt

// object

const person = {
  firstName: "Peter",
  lastName: "Thiel",
  age: 58,
  books: ["Now is the time", "Hello Tomorrow", "The Lean Startup"],
};

// string
// when adding a number and a string, js will treat the number as a string 
// js evaluates expressions from left to right. Different sequence produces a different result

console.log(7 + 'Hello');
console.log('Name' + 9);
console.log(8 + 5 + 'Summation') // takes 8 and 5 as numbers, computes the sum, converts to string and concatenates 
console.log('JavaScript' + 89 + 3); // treats 89 and 3 as strings


// number 
// extra small or large numbers can be written with the exponential notation

let x = 67e228;
console.log(x);

let y = 3e-6;
console.log(y);

console.log(typeof y);
console.log(typeof(x));

// symbol data type 
// * the importance of symbols within the javascript environment 
