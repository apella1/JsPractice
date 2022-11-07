// * For loop - loops through the block of code a number of times
// the three expressions within the for loop can be omitted as they're not necessary for the loop to be executed
// however when expression two is missing, a break statement must be provided otherwise the loop will not stop (crashing the browser) 

for (let number = 0; number < 9; number ++) {
    console.log(number);
}

let i = 1
for (; i < 6; ) {
    console.log(i);
}

// list an array of popular books
const popularBooks = ['Mastery', 'Grit: The Power of Perseverance', 'The Psychology of Money'];

for (let i = 0; i <= popularBooks.length; i++) {
    console.log(popularBooks[i]);
}


// * For in - loops through the properties of an object

const numbers = [4, 6, 8, 9, 3, 5, 6];

let text = '';

for (let x in numbers) {
    text += numbers[x]
}

let txt = '';
numbers.forEach(myFunction);

function myFunction(value, index, array) {
    txt += value;
}

console.log(text);

// * For of - loops through the values of an iterable object

// * While loop - loops through a block of code as long as a specified condition is true

// * Do while loop - loops through a block of code once, and then repeats the loop as long as a specified condition is true