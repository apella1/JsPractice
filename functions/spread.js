function sum(x, y, z) {
  return x + y + z;
}

numbers = [4, 6, 1];

console.log(sum(...numbers));
console.log(sum.apply(null, numbers));

const array = [1, 2, 3];
const obj = { ...array };

console.log(obj);

//* nullish coalescing assignment
const a = { duration: 50 };

a.duration ??= 10;
console.log(a.duration);

a.speed ??= 25;
console.log(a.speed);
