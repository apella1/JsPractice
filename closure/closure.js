const wrapValue = (n) => {
    value = () => n;
    return value;
}

console.log(undefined * 3);

const first = wrapValue(3);
const second = wrapValue(2);

console.log(first());
console.log(second()); // local bindings are created a new after every call;