const age = 30;
const name = "John";
const summary = `My name is ${name} and I am ${age} years old`;

console.log(summary);


/* 
    * The code would be synchronous even if we called a function
    * below is an example of that
 */


function getStudentName(studentName) {
    return `My name is ${studentName}`
}

let studentName = "John";
const makeStudentName = getStudentName(studentName);
console.log(makeStudentName);