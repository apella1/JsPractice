const age = 78;

// * initializing a variable. const cannot be initialized or be reassigned.
let score;

score = 7;

const game = "Football";
const average = 79.66;
const hasScored = true;
let x = null;
let z = undefined;

// use of backticks for concatenating strings
let myIntro = `I play ${game} and I have  an average score of ${average}`;

console.log(game.substring(0, 4).toUpperCase());

console.log(game);

// using a constructor to define arrays
const numbers = new Array(2,3,5,7,11,13);
console.log(numbers);

const languages = ["English", "Kiswahili", "Java", "French"];

// this method of adding items to the array isn't effective as it's not easy to know the number of items in the array making the use of the push method effective
languages[4] = "Croatian";

// push adds to the end of the array while unshift adds to the beginning of the array
languages.push("Luo");
languages.unshift("Tibetan");
console.log(languages);

// gets the index of the array element
console.log(languages.indexOf("Tibetan"));

// defining new array using constructor and adding elements to the array 

let vehicles = new Array ("Car", "Lorry");
vehicles.push("Train");
vehicles.unshift("Luxury vehicles");

// getting the index of specific element in the vehicles array 

console.log(vehicles.indexOf("Train"));

console.log(vehicles);

// object literals

const person = {
    firstName: "John",
    lastName: "Mani",
    age:43,
    hobbies: ["Football", "FIFA", "Philosophy", "Ideation"],
    address: {
        county:"Nairobi",
        constituency: "Roysambu",
        ward: "Wendani"
    }

};

console.log(person);

console.log(person.address, person.firstName);

console.log(person.hobbies[3]);

// * Destructuring arrays. 
// Can only be done once for the elements of the object and makes them available within the block

const {firstName, lastName, address: {county}} = person;  // * how destructuring is applied within react props 
console.log(county);

console.log(firstName);
console.log(lastName);

const {address:{constituency}} = person;

console.log(constituency);

const{hobbies, address:{ward}} = person;

console.log(hobbies);
console.log(hobbies[2]);
console.log(ward);

const results = {
    subject: 'English Literature',
    marks: 78,
    grade: 'A'
}


const {subject, marks, grade} = results;
console.log(subject); // prints out the subject within the object
// adding properties to the object

console.log(marks);
console.log(grade);

person.married = true;

console.log(person);

// creating arrays containing objects
// the const keyword for arrays doesn't mean that the array is constant but rather the array has a constant reference in memory
// the array can be manipulated using array methods however the array cannot be reassigned 

const gameFootball = [
    {
        id:1,
        clubName:"Barca",
        clubNumber:2,
        founded:1968,
        founder: "Van Basten",
        wonChampionsLeague: false
    },

    {
        id:2,
        clubName: "Real",
        clubNumber:12,
        founded:1997,
        founder: "Andrea Pirlo",
        wonChampionsLeague: true
    },

    {
        id:3,
        clubName: "Nakama",
        clubNumber:23,
        founded:1968,
        founder: "Nicolo Andreas",
        wonChampionsLeague: false
    }
];

// * Common code blocks for switch cases 

switch (gameFootball.founded, gameFootball.founder) {
    case gameFootball.founded >= 1950:
    case gameFootball.founder === 'Andrea Pirlo':
        console.log("The club is relatively young");
        break;
    default: 
        console.log("The club is old");
}

// array methods practice 

// * adding club numbers 

const clubNumberSum = gameFootball.reduce((current, item) => { 
    return current + item.clubNumber;
}, 0)

console.log(clubNumberSum);

// * filtering clubs with id less than or equal to 4 and only giving out the club name

const gameId = gameFootball.filter( (item)=> { 
    return item.id <= 4 
}).map((item) => {
    return item.clubName;
});

console.log(gameId);

console.log(gameFootball);


// * checking if there is any club with id of 5

const clubWithId5 = gameFootball.some( (item) => { 
    return item.id === 5
})

console.log(clubWithId5);


// * checking if every club was founded before 2000
const earlyClub = gameFootball.every( (item => { 
    return item.founded < 2000
}))

console.log(earlyClub);


// * checking if the the array has 'Real' as a club name
const hasReal = gameFootball.map( (item) => {
    return item.clubName
}).includes('Real');

console.log(hasReal);

// * the first block brackets selects the item on the second index of the array and the second selects the third index item from clubName
console.log(gameFootball[2].clubName);


console.log(gameFootball[1].founded); // * returns 1997 for the founded property of the second object within the array i.e the object within the first index of the array 

console.log(gameFootball[0].founder);

console.log(gameFootball[2].wonChampionsLeague);

console.log(gameFootball[0].clubNumber); // * returns the club number of the first object within the array 


// converting the file to a JSON file using the JSON.stringify method
// ? in which situations do we need to convert files to json files within the environment 

const gameFootballJSON = JSON.stringify(gameFootball);

console.log(gameFootballJSON);


// running for loops

for(let i = 0; i < 12; i++) {
    console.log(`For Loop Number: ${i}`);
    console.log(i);
};


// while loops
// todo: work on while loops 

let j = 0;
while (j = 0) {
    j+=
    console.log(`While loop ${j}`);
}

// looping through arrays
// * using for loops 

for (let i = 0; i <= gameFootball.length; i++) {
    console.log(gameFootball[i])
}


// * looping for of

for (let gameNow of gameFootball) {
    console.log(gameNow.id);
}

for (let game of gameFootball) { 
    console.log(game.clubName);
}

for (let founder of gameFootball) { 
    console.log(founder.founder);
}

// * High Order looping through arrays - forEach, map, filter

gameFootball.forEach( (games) => {
    console.log(games);
}
    );

// using map
const founders = gameFootball.map( (gameFounders) => {
    return gameFounders.founder;
 }
);

console.log(founders);

// using filter

const champions = gameFootball.filter ( (champions) => {
    return champions.wonChampionsLeague === true;
}
).map (function (club) {
    return club.clubName;
}
    );

console.log(champions); // mapping just the club name that has won champions league, that is, wonChampionsLeague === true

// conditionals

const v = 22;
if (v===23) {
    console.log("V is equal to 23");
}

else {
    console.log("V is not equal to  23");
}

switch(v) {
    case 22: console.log('V is equal to 22');
    break;
    default: console.log('V is not equal to 22'); 
    
}

const numeral = v === 22 ? 'Yes' : 'No';

console.log(numeral);

// the ternary operator ? : - has extensive usage within the react library

const b = 9;
const color = b > 6 ? "indigo" : "gray";

console.log(color);

switch (color) {
    case"indigo":
    console.log("Color is indigo.");
    break;
    case "gray":
    console.log("Color is gray.");
    break;
    default:
    console.log("Color is neither indigo or gray.")
}

// cases where the switch operator is used in real life code 

const k = 7;
const  prepareDinner = k <= 8 ? "Prepare dinner" : "No dinner today";

switch (prepareDinner) {
    case"Prepare dinner":
    console.log("Today we are preparing dinner.");
    break;
    case"No dinner today":
    console.log("There's no dinner for today.");
    break;
    default:
    console.log("No decision has been made on dinner.");
}

// ? where switch cases are implemented to solve problems 

// using switches

// creating functions and calling functions
// these are declarative functions 

function numDiff (num1, num2, num3) {
    console.log(num1*(num2-num3));
}

numDiff(4,0,6); // calling a function


// using the arrow function
const mySum = (no1, no2) => no1 + no2;
console.log(mySum(67,5));


// object oriented programming

// * constructor function
function Client (firstName, lastName, nativeLanguage, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.nativeLanguage = nativeLanguage;
    this.age = age;
}

// * instantiating an object

const client1 = new Client("Mary", "Bidet", "German", 22);

console.log(client1);

function Cars (brand, model) { 
    this.brand = brand; 
    this.model = model;
}

const car = new Cars("BMW", "M3");
console.log(car);

// creating a class
// how react interacts with javascript classes 
// class Person extends React.Component - not sure what this computes to 

class Person {
    constructor (firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
}

class Sport { 
    constructor (name, country) {
        this.name = name;
        this.country = country;
    }
}

const sport = new Sport ('Football', 'England');

// ? difference between the function constructor and the class constructor
// classes use the constructor keyword. Everything including the instantiation remains the same
// the local window object
console.log(window);

// the document object model

// single selectors
const form = document.getElementById("my-form");
console.log(form);
console.log(document.querySelector(".title")); // this selects just a single objects regardless of all the available objects of the same type picking just the first one


// multiple selectors
console.log(document.querySelectorAll(".form__item")); // selects multiple objects  - ideal for all selections

// document.getElementsByClassName - the items selected has to be a class


// writing a product function

const myProduct = function (num1, num2) {
    console.log(num1*num2);
}

myProduct(2,4);

const meanScore = (num1, num2) => ((num1+num2)/2);
console.log(meanScore(76,89));


// Determining outcome using switch cases

const day = 4;
const meal = day > 3 ? "Ugali" : "Rice";

switch (meal) {
    case "Rice":
        console.log("Today we'll prepare rice.");
    break;
    case "Ugali":
        console.log("Today we'ell prepare ugali.");
    break;
    default:
        console.log("Today we're eating out.")
}


// creating classes

class Ideas {
    constructor (ideaName, value, tools) {
        this.ideaName = ideaName;
        this.value = value;
        this.tools = tools;
    }
}

const idea1 = new Ideas ("Writing blogs.", 78, "WordPress");

console.log(idea1);

//  constructor object - the use of declarative functions to create objects 

function Planets (planetName, distanceAway, dateFormed) {
    this.planetName = planetName;
    this.distanceAway = distanceAway;
    this.dateFormed = dateFormed;
}

const planet1 = new Planets ("Jupiter", 799, 1783);


// if statements
const house = "Manyatta";

if (house === "Manyatta") {
    console.log("House occupied by Maasai.");
}

else {
    console.log("No formal setting identified.")
}


// formation of arrays with object literals as the array items. 
const Students = [
    {
        id:1,
        studentName: "John Doe",
        year:2,
        course: "Maths",
        passedExam: false
    },
    {
        id:2,
        studentName: "Kings Kiti",
        year:4,
        course: "Sciences",
        passedExam: false
    },
    {
        id:3,
        studentName: "Ciara Mula",
        year:2,
        course: "Maths",
        passedExam: true
    },
    {
        id:4,
        studentName: "Mina Mutobo",
        year:3,
        course: "English",
        passedExam: false
    },
    {
        id:5,
        studentName: "James Malcolm",
        year:4,
        course: "Sciences",
        passedExam : true
    }
];

// sorting through a list of objects within an array in alphabetical order 

let sortedStudents = Students.sort();
console.log(sortedStudents);

sortedStudents.sort( function(a, b) { 
    if (a.sortedStudents > b.sortedStudents) {
        return 1
    }

    else if (a.sortedStudents < b.sortedStudents) {
        return -1
    }

    else { 
        return 0
    }
}

)

const notYear2 = Students.map( function (schoolYear) {
    return schoolYear.year !== 2
}

);

console.log(notYear2);


// returning the names of student who has passed exams from the array student

const studentPassed = Students.filter ( function (passed) {
    return passed.passedExam === true
}
) .map (function (stName) {
    return stName.studentName
}
    );

console.log(studentPassed);

// looping for of

for (let studyYear of Students) {
    console.log(studyYear.year)
}

for (let exam of Students) {
    console.log(exam.passedExam)
}

const items = document.querySelectorAll('.item');
items.forEach ((item) => console.log(item));

items.forEach ( function (item) {
    console.log(item.items)
}
);

// manipulating the DOM

const myList = document.querySelector(".list");

// myList.remove(); - error message 'cannot read properties of null, reading remove'

// myList.firstElementChild.textContent = "How are you?";
// myList.children[1].innerHTML = "<h1>Heading 1</h1>";
// myList.lastElementChild.innerText = "Text three." - why the selection doesn't work for the assigned constant

// const button = document.querySelector(".button");
// button.style.background = "blue";
// javascript eventsban
