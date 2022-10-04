const posts = [
    {
        title: 'Post one',
        body: 'This is the first post'
    }, 
    {
        title: 'Post two', 
        body: 'This is post two'
    },
    {
        title: 'Post three', 
        body: 'Third post'
    }
];

// setTimeout sets a duration after which a function is called 
// using += syntax to append the output upon every iteration. When the initial + is omitted only the last iteration is displayed as the output

function getPosts() { 
    setTimeout(() => {
        let output = '';

        posts.forEach( (post, index) => { 
            output += `<li>${post.title}</li>` 
        });

        document.body.innerHTML = output;
    }, 1000)
}

function createPost(post, callback) { 
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000)
}

createPost({title: 'Post four', body: 'This is post four'}, getPosts);

// when getPosts is executed first, the elements are already appended to the html body and therefore the createPosts function has no effect when called later on.
// callbacks however take care of this.

// Timers - setTimeout()

setTimeout(checkUpdates, 1000); // setTimeout calls checkUpdates(callback function) after one second
setInterval((count) => {
    return count++
}, 2000);

// setInterval runs the callback function within the specified interval. 
// clearInterval()

function stopCheckingForUpdates() {
    clearInterval(updateIntervalId)
}


// * Events
// client-side js programs are almost universally event driven - waiting to respond to user action 
// the callback functions are called event handlers or event listeners 
// they are registered with addEventListener();


// * Network Events
// server-side javascript 
