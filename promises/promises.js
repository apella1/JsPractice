/* 
    A promise is an object that is returned by an asynchronous function
    which represents the current state of the operation 
*/

// Fetch API
const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

console.log(fetchPromise);

// then() itself returns a promise
// * chaining promises - prevents ever increasing indentation when calling multiple async functions
fetchPromise
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Http Response: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data[0].name);
  })
  .catch((error) => {
    console.error(`Could not return products: ${error}`);
  });

console.log("Started request…");

// Promise terminology
/* 
    pending
    fulfilled
    rejected
    settled can be used as a general term to cover fulfilled and rejected
 */

// combining multiple promises - Promise API
// ? what happens when the promises aren't related?

const fetchPromise1 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);
const fetchPromise2 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found"
);
const fetchPromise3 = fetch(
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
);

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
  .then((responses) => {
    for (response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }
  })
  .catch((error) => {
    return `Failed to fetch: ${error.status}`;
  });

// works the same like Promise.all() but is fulfilled when any of the promises is resolved
// however it's rejected only when all the promises are rejected

Promise.any([fetchPromise1, fetchPromise2, fetchPromise3])
  .then((responses) => {
    for (response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }
  })
  .catch((error) => {
    return `Failed to fetch: ${error.status}`;
  });

