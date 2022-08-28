const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

// sorting from the smallest to the largest
primeNumbers.sort();
console.log(primeNumbers);

// sorting from the largest to the smallest
primeNumbers.reverse();
console.log(primeNumbers);


console.log(primeNumbers.length);

primeNumbers.splice(0, primeNumbers.length);

// removing the first element of the array
primeNumbers.shift();

// removing the last element of the array
primeNumbers.pop();

// adding an element to the beginning of the array
primeNumbers.unshift(1);

// adding an element at the end of an array 
primeNumbers.push(100);

const names = ['agnes', 'Agnes'];

console.log(names.sort());


const greekGods = ['Ares', 'Zeus', 'Poseidon', 'Hera', 'Apollo', 'Artemis', 'Athena', 'Aphrodite', 'Hermes', 'Hades', 'Hephaestus', 'Demeter', 'Dionysus', 'ares', 'zeus', 'poseidon', 'hera', 'apollo', 'artemis', 'athena', 'aphrodite', 'hermes', 'Hades', 'Hephaestus', 'Demeter', 'Dionysus'];

console.log(greekGods.length);

console.log(greekGods.sort());

console.log(greekGods.reverse());

// looping through an array

greekGods.forEach( (god) => {
    console.log(god.toUpperCase()); 
})

const lowGods = greekGods.forEach( (god) => {
    god.toLowerCase()});

console.log(lowGods);

console.log(greekGods);

greekGods.splice(20, greekGods.length); 
console.log(greekGods);

greekGods.filter( (god) => {
    return god.length > 6;
}).forEach( (god) => {
    console.log(god.toUpperCase());
} );

greekGods.map( (god) => {
    return god.toUpperCase();
}).forEach( (god) => {
    console.log(god);
} );

// an array containing country, capital city and year of independence as objects
const countries = [
    {
        country: 'Canada',
        capital: 'Ottawa',
        year: 1867
    },
    { 
        country: 'United States of America',
        capital: 'Washington D.C.',
        year: 1776
    },
    {
        country: 'Mexico',
        capital: 'Mexico City',
        year: 1810
    },
    {
        country: 'Brazil',
        capital: 'Brasilia',
        year: 1822
    },
    {
        country: 'Argentina',
        capital: 'Buenos Aires',
        year: 1816
    },
    {
        country: 'Colombia',
        capital: 'Bogota',
        year: 1810
    },
    {
        country: 'Peru',
        capital: 'Lima',
        year: 1821
    },
    {
        country: 'Chile',
        capital: 'Santiago',
        year: 1818
    },
    {
        country: 'Ecuador',
        capital: 'Quito',
        year: 1821

    },
    {
        country: 'Venezuela',
        capital: 'Caracas',
        year: 1811
    },
    {
        country: 'Kenya',
        capital: 'Nairobi',
        year: 1963
    },
    {
        country: 'Tanzania',
        capital: 'Dodoma',
        year: 1869
    },
    {
        country: 'Uganda',
        capital: 'Kampala',
        year: 1994
    },
    {
        country: 'Rwanda',
        capital: 'Kigali',
        year: 1994
    },
    {
        country: 'Burundi',
        capital: 'Bujumbura',
        year: 1962
    }

];

const countriesWithCapital = countries.filter( (country) => {
    return country.capital !== undefined;
} ).map( (country) => {
    return country.capital});

console.log(countriesWithCapital);

const countryWithLateIndependence = countries.filter( (country) => {
    return country.year > 1900;
} ).map( (country) => {
    return country.country});


console.log(countryWithLateIndependence);

// reduce method
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce( (accumulator, currentValue) => {
    return accumulator + currentValue;
})

console.log(sum);