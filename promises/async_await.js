/* Using await within a function to bind a promise to a variable */

fetchProducts(); // * hoisting the async function declaration

async function fetchProducts() {
  try {
    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    );
    if (!response.ok) {
      throw new Error(`Http Error: ${response.status}`);
    }
    const data = await response.json();
    console.log(data[0].type);
  } catch (error) {
    console.error(`Could not get products: ${error.status}`);
  }
}

/* 
    * The following won't work since 'promise' is a promise object
     const promise = fetchProducts()
     console.log(promise[index].property)

    * A solution to this would be 
   const promise = fetchProducts()
    promise.then((data) => console.log(data[index].property))
 */

// Concept Retrieval
/*
 * Function definition vs function declaration
 */

// ! Interesting Facts
// await keyword can only be used within an async function or within a module
