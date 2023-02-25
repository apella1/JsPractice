// * this is a continuation from the main 'workers' folder
const generate = document.getElementById('generate');
const quota = document.getElementById('quota');
const output = document.getElementById('output');
const reload = document.getElementById('reload');
const userInput = document.getElementById('user-input');



function generatePrime(quota) {
    function isPrime(n) {
        for (x = 2; x <= Math.sqrt(n); ++x) {
            if (n % x == 0) {
                return false
            }
        }
        return true
    }
    
    const primes = [];
    const maximum = 1000000;

    while (primes.length < quota) {
        const candidate =  Math.floor(Math.random() * (maximum + 1))
        if (isPrime(candidate)) {
            primes.push(candidate)
        }
    }
    
    return primes;
}

generate.addEventListener('click', () => {
    const quota = quota.value;
    const primes = generatePrime(quota);
    output.textContent = `Finished generating ${quota} prime numbers!`
})


reload.addEventListener('click', () => {
    userInput.value = `Try typing in this text box as soon as you hit the Generate Primes button`
    document.location.reload()
})