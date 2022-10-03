// promises are objects that represent the not yet available results of an asynchronous operation

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

function getPosts() { 
    setTimeout(() => {
        let output = '';

        posts.forEach( (post, index) => { 
            output += `<li>${post.title}</li>` 
        });

        document.body.innerHTML = output;
    }, 1000)
}

function createPost(post) {
    return new Promise( (resolve, reject) => {
        setTimeout( () => { 
            posts.push(post)

            const error = false;

            if(!error) { 
                resolve();
            }else { 
                reject('Error: Something went wrong')
            }

        }, 200)
    });
}

createPost({title: 'Post four', body: 'This is post four'})
    .then(getPosts)
    .catch(err => console.log(err));

// Promise.all
const promise1 = Promise.resolve('Hello World');
const promise2 = 14;
const promise3 = new Promise( (resolve) => { 
    setTimeout(resolve, 2000, 'Goodbye');
});

const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then( res => res.json())

Promise.all([promise1, promise2, promise3]).then( (values) => { 
    console.log(values)
});

// all the promises are displayed once the last value has been resolved 
// ? using fetch api to make http requests 

// * async / await
// setTimeout runs once and forgets about the code. To write a function that updates regularly, setInterval is used instead
// ? clearInterval