const numbers = [2, 5, 7];

total = 0;

for(let n of numbers) {
	total += n;
}

console.log(total)

// reduce

const sum = numbers.reduce((cv, n) => cv + n, 0);

console.log(sum);