const button = document.querySelectorAll('.button');

button.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e);
})

// todo go through the list of event listeners and see what they do