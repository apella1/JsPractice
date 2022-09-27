//AJAX - asynchronous javascript and xml. 
// javascript call stack

// synchronous code example 

function myFunction () {
    console.log('Today is an amazing day');
    console.log('I am learning javascript');
}

console.log('Start here');

myFunction();

console.log('End here');

// asynchronous code example

console.log('Start');

setTimeout(() => {
    console.log('I am an asynchronous function');
}, 2000);

console.log('End');

async function fetchUsers() { 
    const res = await fetch('https://jsonplaceholder.typicode.com/users')

    const data =  await res.json();

    console.log(data);
}

fetchUsers();