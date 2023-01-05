let peaceMaker = {
    value: 'Peace'
}

let otherMaker = peaceMaker;

let myMaker = {
    value: 'Peace'
}

console.log(peaceMaker === otherMaker);
console.log(peaceMaker == myMaker);
console.log(otherMaker.value, myMaker.value);

otherMaker.value = 'Rider'

console.log(peaceMaker)

peaceMaker['value'] = 'Jettison'
console.log(otherMaker);