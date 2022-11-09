// a recursive is a function that calls itself. 
// it is okay for a function to call itself as long as it does not overflow the call stack
// recursion is an alternative to looping - generally slower but still has optimum application areas 


function power(base, exponent) { 
    if (exponent === 0) {
        return 1
    }else {
        return base * power(base, exponent -1)
    }
}

console.log(power(2, 7));

console.log(power(3, 3));

// this is however slower compared to the looping variation. It is faster(cheaper) to loop through a function than to call a function several times
// * the dilemma of speed vs elegance - human friendliness vs machine friendliness 
// although any program can be made faster by making it bigger and more convoluted, the programmer must decide for a balance of both worlds. 
// optimizing for speed and making the code human friendly for maintainability 

// ? problem 

function findSolution(target) { 
    function find(current, history) {
        if (current == target) { 
            return history
        } else if (current > target) { 
            return null;
        } else {
            return find(current + 5, `${history} + 5`) ||
                   find(current * 3, `${history} * 3`);
        }
    }

    return find(1, '1')
}

console.log(findSolution(24));
console.log(findSolution(11));
console.log(findSolution(6));
console.log(findSolution(89));

// recursive function that prints numbers so long as the given conditions are met

function numPrint (x) {
    if(x > 0) {
        return x
    }
    
    numPrint(x - 1);
}

console.log(numPrint(7));

// getting maximum call stack 

const getMaxCallStack = (i) => {
    try {
        return getMaxCallStack(++i)
    } catch (error) {
        return i
    }
}

console.log(getMaxCallStack(0));



// Factorial function - a typical use  of recursive functions 

const numFactorial = (x) => {
    if (x === 0) {
        return 1;
    } else {
        return x * numFactorial(x - 1)
    }
}

console.log(numFactorial(10));

// fibonacci 

const fibonacci = (n) => (n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2));
console.log(fibonacci(10));
