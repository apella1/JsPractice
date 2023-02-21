const alarmButton = document.getElementById('set-alarm')
const messageOutput = document.getElementById('output')
const personName = document.getElementById('name')
const delay = document.getElementById('delay')

function setAlarm() {
    setTimeout(() => {
        messageOutput.textContent = 'Wake Up!';     
    }, 1000);
}


function alarm(person, delay) {
    return new Promise((resolve, reject) => {
        if (delay < 0) {
            throw new Error("Delay time cannot be a negative number")
        }
        
        setTimeout(() => {
            resolve(`Wake up, ${person}`)
        }, delay);
    })
}


alarmButton.addEventListener('click', () => {
    alarm(personName.value, delay.value)
        .then((message) => messageOutput.textContent = message)
        .catch((error) => messageOutput.textContent = `Couldn't server alarm: ${error}`)
})