//Create a Simple Promise

let myPromise = new Promise(function(resolve, reject) {
  let orderReady = true;

  if (orderReady) {
    console.log("Burger is ready!");
  } else {
    console.log("Sorry, the order failed.");
  }
});


// Promise with setTimeout() (Delay)

let delayedPromise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    console.log("Burger ready after 2 seconds!");
  }, 2000);
});


//Using .then() to Handle a Promise

delayedPromise.then(function(message) {
  console.log(message); 
});
 

//Using .catch() to Handle Errors

let failedPromise = new Promise(function(resolve, reject) {
  reject("Kitchen fire! Order failed.");
});

failedPromise
  .then(function(message) {
    console.log("Success:", message);
  })
  .catch(function(error) {
    console.log("Error:", error);
  });

  //Chaining Multiple .then() Calls

  let numberPromise = new Promise(function(resolve, reject) {
  resolve(5); // Start with number 5
});

numberPromise
  .then(function(number) {
    console.log("Step 1:", number); // 5
    return number * 2;
  })
  .then(function(newNumber) {
    console.log("Step 2:", newNumber); // 10
    return newNumber + 3;
  })
  .then(function(finalNumber) {
    console.log("Step 3:", finalNumber); // 13
  });
