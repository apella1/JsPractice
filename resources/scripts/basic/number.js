// Number object follows IEEE standard to represent the floating-point numbers

// Number Constants 
// MIN_VALUE, MAX_VALUE - largest minimum and maximum values 
// POSITIVE_INFINITY, NEGATIVE_INFINITY - returns positive and negative infinity - overflow values 
// NaN - Not a Number value

// * Number methods 
// isFinite()  
// parseFloat(), parseInt() - conversion to float and integer 
// toExponential() - returns string that represents exponential notation of the given number
// toSting()
// toFixed() - returns the string that represents a  number with exact digits after a decimal point. 
// toPrecision() - returns the string representing a number of specified precision

const number = 8;

console.log(number.toFixed());
console.log(number.toString());
console.log(number.toPrecision());
console.log(number.toExponential());

console.log(isFinite(number));
console.log(parseFloat(number));