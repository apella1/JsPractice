// date object - used to get year, month and day

// Constructor 
console.log(Date());

function getTime() { 
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();

    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
}

function checkTime(i) {
    if (i < 10) { 
        i = '0' + i
    }

    return i
}

console.log(setTimeout(() => {
    getTime()
}, 1000));

// setTimeout is a callback function 
// it takes two parameters, a function and the time interval in which its executed - the execution is done once on every call 

console.log(new Date().getFullYear());
console.log(new Date().getMilliseconds());

// Date is always an object - other data types such as string and number could also be objects when instantiated with the new keyword

