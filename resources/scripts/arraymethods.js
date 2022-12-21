// an array of cars
const cars = ['Ford', 'Audi', 'BMW', 'Mercedes'];

// an array of boy names
const boyNames = ['John', 'Peter', 'Paul', 'Gladwell', 'Mandela'];

boyNames.splice(2, 2); // removing

console.log(boyNames);

const girlNames = ['May', 'June', 'Angela', 'Pauline'];

const sliceGirls = girlNames.slice(1, 3); // second value starts from index 0

console.log(sliceGirls);

const coolNames = ['Mike', 'Pam', 'LeBron', 'Jordan'];

const sliceCoolNames = coolNames.slice(1, 3);

console.log(sliceCoolNames);

console.log(coolNames);

// concatenating arrays - .concat()
// joining two arrays 
const allNames = girlNames.concat(boyNames);
const otherNames = boyNames.concat(girlNames);
allNames.sort();
otherNames.sort();
console.log(allNames == otherNames);

// joining three arrays 
const superNames = boyNames.concat(girlNames, coolNames);

console.log(superNames);


// constructor - shows the method that was used to create the array
// ! cars.constructor; -  this is an es1 feature 

// .join() - joins the array elements into a string
const items = ['Item1', 'Item2', 'Item3'];

items[items.length] = 'Item4'

console.log(items);

const splicedItems = items.splice(1, 2);

const slicedItems = items.slice(2, 1);
console.log(slicedItems);
console.log(slicedItems);


// document.querySelector('.item').innerHTML = items.join('~'); // ~ is the separator. querySelectorAll for all classes doesn't join for all the list elements with the class item

// getting the index of an array 
console.log(boyNames.indexOf('Paul'));  // returns 2



// * .push() - adds an element to the end of an array  
// * .pop() - removes an element from the end of an array
// * .unshift() - adds an element to the beginning of an array 
// * .shift() - removes an element from the beginning of an array
// * .splice() - adds or removes elements from an array

// an array of animal names
const animals = ['Lion', 'Tiger', 'Bear', 'Dog', 'Cat'];

animals.unshift('Elephant'); 

animals.pop(); // removes cat from the list 

console.log(animals);

animals.shift();
console.log(animals);

animals[animals.length] = 'Kangaroo'; // works the same way as the .push() method
console.log(animals);

// array splice and slice methods
const subjects = ['Math', 'English', 'History', 'Science', 'Art', 'Music'];
subjects.splice(1, 4, 'PE', 'SSD', 'KDD'); // * the second number shows how many elements are to be removed, the third parameter represents elements to be added

console.log(subjects);  

const sliceSubjects = subjects.slice(2, 5);

console.log(sliceSubjects);

const tools = ['Hammer', 'Saw', 'Screwdriver', 'Pliers', 'Wrench'];
tools.splice(0, 2); // * removes the first 5 elements from the array

console.log(tools);

const fruits = ['Apple', 'Banana', 'Orange', 'Pear', 'Grape'];
const citrus = fruits.slice(2, 3); 
console.log(citrus);

// ! all javascript methods have .toString() method - this method converts the array into a string

// document.getElementById('array').innerHTML = animals.toString();
// document.getElementById('array').innerHTML = animals;   // ! both of these work the same way


// sorting an array 
// * .sort() - sorts the array in alphabetical order, .reverse() reverses the order of the array - descending order

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.reverse();
console.log(numbers)
numbers.sort(); 
// sorts the array in ascending order based on the fist character e.g 243 comes before 90

console.log(numbers);


// includes method 
const hasSeven = numbers.includes(7);

console.log(hasSeven);


// filter method 

const products = [
    {
        name: 'TV', 
        price: 469
    },
    {
        name: 'Washing machine', 
        price: 2000
    },
    {
        name: 'Adjustable table', 
        price: 1050
    },
    {
        name: 'Smart watch', 
        price: 600
    },
    {
        name: 'Peloton machine', 
        price: 3500
    },
    {
        name: 'Mobile phone', 
        price: 700
    },
    {
        name: 'Pen', 
        price: 30
    }

];

const filteredByPrice = products.filter( (product) => {
    return product.price >= 700
})

console.log(filteredByPrice); 

// map method 

const itemNames = products.map( (item) => {
    return item.name
 })

 console.log(itemNames);

 const itemPrices = products.map( (item) => {
    return item.price
 })

 console.log(itemPrices);

 // find method 

 const itemFound = products.find( (item) => {
    return item.name === 'Adjustable table'
 })

 console.log(itemFound);

 const itemPeloton = products.find ( (item) => { 
    return item.name === 'Peloton machine'
 }
 )

 console.log(itemPeloton);

 const withPrice700 = products.find ((item) => { 
    return item.price === 700;
 })

 console.log(withPrice700);

 // forEach
products.forEach( (item) => {
    console.log(item.name);
})

console.log(products);

// * some method. returns true if any of the item within the array matches any of the tested conditions within the defined functions 
// * the difference between the filter and the some method is that filter returns all the values that meet the condition whereas some returns a boolean. 
// * if the conditions are met, some returns true otherwise false

const hasPriceyProducts = products.some( (item) => { 
    return item.price > 2000
})

const priceyProducts = products.filter ( (item) => { 
    return item.price > 2000
})

console.log(hasPriceyProducts);
console.log(priceyProducts);

// * every method. checks to see if every single element of the array matches the condition they are tested against

const expensiveInventory = products.every( (item) => { 
    return item.price >= 100 
})

const inexpensiveProduct = products.filter(item => {
    return item.price <= 100
})

console.log(inexpensiveProduct)
console.log(expensiveInventory);

// * reduce method. takes in two parameters and works out the specified operations such as the sum

const totalPrice = products.reduce( (currentTotal, product) => {
    return currentTotal + product.price
}, 0);

console.log(totalPrice);

const nameString = products.reduce( (item, product) => { 
    return item + product.name
}, ' ')

console.log(nameString);  

// includes method

const hasTV = products.includes('TV');
console.log(hasTV);