// Create a Simple Promise

let promise = new Promise(function(resolve, reject) {
    let success = true;
    if (success) {
        resolve("Promise resolved!");
    } else {
        reject("Promise rejected.");
    }
});

console.log(promise);

// Promise with setTimeout()

let delayedPromise = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve("Resolved after 2 seconds");
    }, 2000);
});
console.log(delayedPromise);

// Using .then() to Handle a Promise

delayedPromise.then(function(result) {
    console.log(result); 
});

// Using .catch() to Handle Errors

let errorPromise = new Promise(function(resolve, reject) {
    reject("Something went wrong!");
});

errorPromise
    // .then(result => console.log(result))
    .catch(error => console.error("Error:", error)); 

// Chaining Multiple .then() Calls

let chainPromise = new Promise(function(resolve, reject) {
    resolve(2);
});

chainPromise
    .then(num => {
        console.log("First then:", num); 
        return num * 2;
    })
    .then(result => {
        console.log("Second then:", result); 
        return result * 3;
    })
    .then(final => {
        console.log("Final result:", final); 
    });

// Advanced Promises & Real-World Usage

// Fetch Data from an API
function fetchUserData() {
    return fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json(); 
        });
}

// Handle API Errors Gracefully

fetchUserData()
    .then(data => {
        // console.log("User Data:", data); 
    })
    .catch(error => {
        console.error("Error:", error.message);
    });

 // Use Promise.all() for Parallel Promises

 function fetchMultipleUsers() {
    const urls = [
        "https://jsonplaceholder.typicode.com/users/1",
        "https://jsonplaceholder.typicode.com/users/2",
        "https://jsonplaceholder.typicode.com/users/3"
    ];
    
    const promises = urls.map(url =>
        fetch(url).then(res => {
            if (!res.ok) throw new Error("Fetch error");
            return res.json();
        })
    );

    Promise.all(promises)
        .then(users => {
            console.log("All Users Fetched:", users);
        })
        .catch(err => {
            console.error("Error in Promise.all:", err.message);
        });
}

fetchMultipleUsers(); 

// Use Promise.race() to Return First Settled Promise

function fetchFirstResponse() {
    const urls = [
        "https://jsonplaceholder.typicode.com/users/1",
        "https://jsonplaceholder.typicode.com/users/2",
        "https://jsonplaceholder.typicode.com/users/3"
    ];

    const promises = urls.map(url =>
        fetch(url).then(res => {
            if (!res.ok) throw new Error("Error in fetch");
            return res.json();
        })
    );

    Promise.race(promises)
        .then(firstUser => {
            console.log("First response received:", firstUser);
        })
        .catch(error => {
            console.error("Error in Promise.race:", error.message);
        });
}

fetchFirstResponse();

//  Wrap Async Logic in a Custom Promise

function delay(ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Waited for ${ms} milliseconds`);
        }, ms);
    });
}

delay(1000).then(message => console.log(message));
