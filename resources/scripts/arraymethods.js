// an array of cars
const cars = ['Ford', 'Audi', 'BMW', 'Mercedes'];

// an array of boy names
const boyNames = ['John', 'Peter', 'Paul', 'Gladwell', 'Mandela'];

const girlNames = ['May', 'June', 'Angela', 'Pauline'];

const coolNames = ['Mike', 'Pam', 'LeBron', 'Jordan'];

// concatenating arrays - .concat()
// joining two arrays 
const allNames = girlNames.concat(boyNames);

// joining three arrays 
const superNames = boyNames.concat(girlNames, coolNames);

console.log(superNames);


// constructor - shows the method that was used to create the array
// ! cars.constructor; -  this is an es1 feature 

// .join() - joins the array elements into a string
const items = ['Item1', 'Item2', 'Item3'];

document.querySelector('.item').innerHTML = items.join('~'); // ~ is the separator. querySelectorAll for all classes doesn't join for all th list elements with the class item

// getting the index of an array 
console.log(boyNames.indexOf('Paul')); // returns 2



// * .push() - adds an element to the end of an array  
// * .pop() - removes an element from the end of an array
// * .unshift() - adds an element to the beginning of an array 
// * .shift() - removes an element from the beginning of an array
// * .splice() - adds or removes elements from an array

// an array of animal names
const animals = ['Lion', 'Tiger', 'Bear', 'Dog', 'Cat'];

animals.unshift('Elephant');

console.log(animals);

animals.shift();
console.log(animals);

animals[animals.length] = 'Kangaroo'; // works the same way as the .push() method
console.log(animals);

// array splice and slice methods
const subjects = ['Math', 'English', 'History', 'Science', 'Art', 'Music'];
subjects.splice(1, 5, 'PE'); // *the first number shows from which index the array is to be spliced, the second number shows how many elements are to be removed, the third number shows how many elements are to be added

console.log(subjects);  

const tools = ['Hammer', 'Saw', 'Screwdriver', 'Pliers', 'Wrench'];
tools.splice(0, 5); // * removes the first 5 elements from the array

console.log(tools);

const fruits = ['Apple', 'Banana', 'Orange', 'Pear', 'Grape'];
const citrus = fruits.slice(1, 3); // * the first number shows from which index the array is to be sliced, the second number shows until which index the array is to be sliced
console.log(citrus);

// ! all javascript methods have .toString() method - this method converts the array into a string

document.getElementById('array').innerHTML = animals.toString();
document.getElementById('array').innerHTML = animals;   // ! both of these work the same way


// sorting an array 
// * .sort() - sorts the array in alphabetical order, .reverse() reverses the order of the array - descending order

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.reverse();
console.log(numbers);