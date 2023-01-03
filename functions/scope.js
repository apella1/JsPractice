let x = 15;

if(true) {
    let x = 30;
    let y = 30;
    var z = 10;

    console.log(x + y + z)
}

console.log(x + z);
console.log(typeof x)


const halfNum = (num) => {
   return num / 2
}

num = 30;

console.log(halfNum(10, true, undefined, 'hello')); // optional arguments
console.log(num)

person = {}

console.log(typeof person)