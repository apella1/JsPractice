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