const person = {
    name: 'Doe',
    numbersLiked: [2, 11],
    age: 28,
    isRich: false,
    "Will attend the celebrations": "yes"
}

console.log(person);
console.log(person.numbersLiked);
person.isMarried = true;

console.log(person)
console.log(person['Will attend the celebrations']);
console.log(person['name'])

// delete operator - uncommon

delete person.isRich;

// Object.assign() and Object.keys()

let A = {
    a: 1,
    b: 2
}

Object.assign(A, {
    b: 6,
    c: 5
})

console.log(A);
console.log(typeof []);
