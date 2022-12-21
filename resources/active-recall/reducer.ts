const primeNumbers: number[] = [2, 3, 5, 7]

let total = 0;

for (let n of primeNumbers) {
    total += n
}

console.log(total);

const primeSum = primeNumbers.reduce((currentValue:number, iteratorValue:number) :number => currentValue + iteratorValue, 0);

console.log(primeSum);