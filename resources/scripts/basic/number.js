// Number object follows IEEE standard to represent the floating-point numbers

// Number Constants 
// MIN_VALUE, MAX_VALUE - largest minimum and maximum values 
// POSITIVE_INFINITY, NEGATIVE_INFINITY - returns positive and negative infinity - overflow values 
// NaN - Not a Number value

// * Number methods 
// isFinite()  - boolean value to check if the number is finite 
// parseFloat(), parseInt() - conversion to float and integer 
// toExponential() - returns string that represents exponential notation of the given number
// toSting()
// toFixed() - returns the string that represents a  number with exact digits after a decimal point - specified number of decimal points
// toPrecision() - returns the string representing a number of specified precision - specified length 

const number = 8;
const numStr = number.toString();

console.log(typeof numStr);

console.log(number.toFixed(2)); // toFixed(2) is perfect for working with money
console.log(number.toString());
console.log(number.toPrecision(3)); // ? difference between toPrecision and toFixed
console.log(number.toExponential());

console.log(isFinite(number));
console.log(parseFloat(number));


// BigIt - in js all numbers are stored in 64-bit floating point format (IEEE 754 standard)
// BigInt - allows to represent integers with arbitrary precision

let largeNumber = 77882882772662672772627738847838873n; // the n at the end is used to specify that it's a large number 
let y = BigInt(7363748299237474774883399393993); // the number can also be parsed around the BigInt keyword

console.log(typeof(y));
console.log(typeof largeNumber);

// bigint makes the supported number of data types 8, which include, numbers, string, boolean, undefined, null, BigInt, object and symbol


// parseInt method 

const num = parseInt('100.00'); // returns 100
console.log(num)

// * Number object methods 
// number methods cannot be used on variables 

console.log(Number.isInteger(y));

console.log(Number.isSafeInteger(largeNumber));
console.log(Number.isSafeInteger(7883));

// Number.parseInt() and Number.parseFloat() works the same as parseInt() and parseFloat()

console.log(Number.parseFloat(66))
console.log(Number.parseInt(45.678)); // parseInt() truncates the value of the number 

