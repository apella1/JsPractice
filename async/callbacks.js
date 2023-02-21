// A callback is a function passed inside another function

/* 
     A callback is a function passed inside another function
    with the expectation that the function will be called 
    at an appropriate time
 */

function doStep1(init) {
  return init + 1;
}

function doStep2(init) {
  return init + 2;
}

function doStep3(init) {
  return init + 3;
}

function doOperation() {
  let result = 0;
  result = doStep1(result);
  result = doStep2(result);
  result = doStep3(result);
  console.log(`result: ${result}`);
}

doOperation();


// having callbacks

function add1(init, callback) {
    const result = init + 1;
    callback(result);
  }
  
  function add2(init, callback) {
    const result = init + 2;
    callback(result);
  }
  
  function add3(init, callback) {
    const result = init + 3;
    callback(result);
  }
  
// ! callback hell or the pyramid of doom

  function completeOperation() {
    add1(0, (result1) => {
      add2(result1, (result2) => {
        add3(result2, (result3) => {
          console.log(`result: ${result3}`);
        });
      });
    });
  }
  
  completeOperation();
  