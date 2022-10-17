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

async function init() { 
    await createPost({title: 'Post four', body: 'This is post four'})

    getPosts();
}

init();

// async await makes it easy to work with promises
// javascript programs in web browsers are typically event driven, waiting for an action to be performed before a function is executed. 