// These include math, dates, regular expressions and generic objects
// JS supports more advanced operations via a global Math object 
// * the inclusion on double asterisks as exponential, as in most programming languages, is in works but not yet fully a feature of the language

// ! Math

console.log(Math.PI)

// the power of a number, taking the first value as the number and the second value as the power
console.log(Math.pow(2, 4));

// square root of a number 
console.log(Math.sqrt(36));

// ?
console.log(Math.cos(2*Math.PI));

// logarithm 
console.log(Math.log(10));

console.log(Math.E);

console.log(Math.log(Math.E));

// * javascript also used log10 to indicate a base of 10 as in normal mathematics 

console.log(Math.log10(10));
console.log(Math.log10(100000000000)); 

console.log(Math.sqrt(-1)); // js still has no support for imaginary numbers

// ! Dates
// Dates represent a single moment in time 
// * Date allows the use of function constructors such as 'new' as opposed to the 'literal constructors' like quotes and square brackets
// unlike strings and arrays, dates hve no literal constructor so we have to use the function constructor 'new'