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


