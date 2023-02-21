const addNum = (a, b) => {
    return a + b;
}

console.log(addNum(3, 5));

names = ['Angela', 'Bee', 'Kelly']

// function definition - regular binding where the value of the binding is a function

const numSquare = (x) => {
    return x * x
}

console.log(numSquare(7))

const power = function (base, exponent) { 
    if (exponent == 0) {
        return 1
    } else {
        return base * power(base, exponent - 1)
    }
}

console.log(power(2, 5));

const powerFunc = function(base, exp) {
    let result = 1;

    for (let count = 0; count < exp; count++) {
        result *= base
    }
    return result;
}

console.log(powerFunc(2, 5))

// side effects

function printName () {
    console.log('Name'); // side effect - no return value
}

printName();
