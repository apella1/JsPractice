const product = (a, b) => {
    return a * b
}

console.log(product(3, 4, 2));


const difference = (a, b) => {
    if (b == undefined) {
        return -a
    }
    return a - b
}

console.log(difference(Infinity, Infinity))

// fallback parameter values
const power = (bs, exp = 2) => {
    let output = 1;
    for (let c = 1; c <= exp; c++) {
        output *= bs
    }
    return output
}

console.log(power(2))
console.log(power(2, 6))