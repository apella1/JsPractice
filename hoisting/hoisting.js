// interpreter lifting declarations(variables, functions, classes) at the top of their scope before execution


// scenario 1 - using values(functions before they are declared) - function, function*, async function*. async function*

asyncCall(); // expected output ~ 'resolved'
console.log(addNumbers(5, 8)) // using addNumbers and asyncCall before they're declared


function addNumbers(a, b) {
	return a + b
}


function resolveAfter25Seconds() {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve('resolve')
		}, 2000);
	});
}

async function asyncCall() {
	console.log('calling')
	const result = await resolveAfter25Seconds();
	console.log(result)
}

//  scenario 2 - referencing a variable in its scope before it is declared(undefined instead of throwing a reference error)

let x = 1

{
	console.log(x) // ReferenceError
	let x = 2
}

console.log(x)


// scenario 3 - variable declaration causes a behaviour change within its scope before it's declared
// Lexical declaration - let, const, class 
// ! temporal dead zone - most people prefer to see the lexical declarations as non-Hoisting



// * special study 
// this is not hoisting - var is not block scoped 

{
	var y = 4
}

console.log(y);

