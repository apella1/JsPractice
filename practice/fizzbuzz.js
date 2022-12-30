for (let n = 1; n <= 100; n++) {
	let output;

	if (n % 3 === 0) {
		console.log(output += 'Fizz');
	}
	if (n % 5 === 0 && !(n % 3 === 0)) {
		console.log(output += 'Buzz');
	}
	if (n % 3 === 0 && n % 5 === 0) {
		console.log(output += 'FizzBuzz');
	}
}
