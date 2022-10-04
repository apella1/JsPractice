// 2 ways to create string - string literal(quotes) and string object 
const greeting = 'Good morning';

console.log(greeting);

// string object - new keyword 
// new keyword creates an instance of string 
const application = new String('Use the tool for its optimum use');

console.log(application);

// string methods 
// charAt() - value present at the specified index
//toUpperCase(), toLowerCase(),  
// toLocaleUpperCase(), toLocaleLowerCase() - on the basis of the host's current locale 
// toString() - provides a string representing the particular object 
// ! deprecated substr() - specified starting position and length
// substring() - basis of specified index 
// valueOf() - primitive value of a string object
// charCodeAt - unicode value of the character at the specified index
//  concat() - combination of two or more strings
// indexOf() - position of a char value present in the given string; lastIndexOf() - starting from the last character 
// search() , match(), replace()

const word = 'Osteoporosis';

console.log(word.charAt(8));
console.log(word.length);
console.log(word.substring());
console.log(word.indexOf('o'));
console.log(word.lastIndexOf('p'));
console.log(word.toLocaleLowerCase());
console.log(word.toLocaleUpperCase());
console.log(word.charCodeAt(1));
console.log(word.endsWith('s'));
console.log(word.startsWith('y'));
console.log(word.codePointAt(4));
console.log(word.valueOf());