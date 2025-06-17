
//Object & JSON Functions.............................................................


// 1. Create User Object
let user = {
  name: "Sabarigirivasan",
  age: 25,
  city: "Chennai"
};
console.log("Original User Object:", user);

// 2. Update Object Property
user.age = 26;
user.city = "Coimbatore";
console.log("Updated User Object:", user);

// 3. Convert Object to JSON
let jsonString = JSON.stringify(user);
console.log("JSON String:", jsonString);

// 4. Parse JSON String
let parsedUser = JSON.parse(jsonString);
console.log("Parsed JSON to Object:", parsedUser);

// 5. List Object Keys
let keys = Object.keys(user);
console.log("Object Keys:", keys);





//Basic Promise Concepts..................................................................................

// 1. Create a Simple Promise
let simplePromise = new Promise((resolve, reject) => {
  let success = true; // Try changing to false to test .catch()
  if (success) {
    resolve("Promise resolved successfully!");
  } else {
    reject("Promise failed.");
  }
});

// 2. Promise with setTimeout()
let timeoutPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Resolved after 2 seconds.");
  }, 2000);
});

// 3. Using .then() to Handle a Promise
simplePromise.then((message) => {
  console.log("Then 1:", message);
});

// 4. Using .catch() to Handle Errors
simplePromise
  .then((message) => {
    console.log("Then 2:", message);
  })
  .catch((error) => {
    console.log("Catch:", error);
  });

// 5. Chaining Multiple .then() Calls
timeoutPromise
  .then((msg) => {
    console.log("Step 1:", msg);
    return "➡ Step 2 data from first then";
  })
  .then((nextMsg) => {
    console.log("Step 2:", nextMsg);
    return "➡ Step 3 data from second then";
  })
  .then((finalMsg) => {
    console.log("Step 3:", finalMsg);
  });



//Object Utilities & Manipulation...........................................................................  

  // Sample object
let user1 = {
  name: "Sabarigirivasan",
  age: 26,
  city: "Coimbatore"
};

// 1. Check if Property Exists
console.log("Has 'age'? :", user1.hasOwnProperty("age")); // true
console.log("Has 'email'? :", "email" in user1); // false

// 2. Merge Two Objects
let extraDetails = {
  email: "sabarigi@gmail.com",
  country: "India"
};
let mergedUser = { ...user1, ...extraDetails };      // Spread operator
console.log("Merged Object:", mergedUser);  

// 3. Count Object Properties
let count = Object.keys(user).length;
console.log("Number of Properties:", count);

// 4. Delete a Property from Object
delete user.city;
console.log("After Deleting 'city':", user);

// 5. Get Values of Object
let values = Object.values(user);
console.log("Object Values:", values);



import React, { useEffect, useState } from "react";

function App() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  // 1. Fetch Data from API and Handle Errors Gracefully
  useEffect(() => {
    const fetchData = () => {
      return fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        });
    };

    // 2. Wrap Async Logic in a Promise
    const wrappedPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        fetchData().then(resolve).catch(reject);
      }, 1000); // simulate delay
    });

    // 3. Use Promise.all() for parallel API calls
    const dummyPromise = new Promise((resolve) =>
      setTimeout(() => resolve("📦 Dummy Data"), 500)
    );

    Promise.all([wrappedPromise, dummyPromise])
      .then(([user, dummy]) => {
        console.log(dummy); // "📦 Dummy Data"
        setUserData(user);
      })
      .catch((err) => {
        setError(err.message);
      });

    // 4. Use Promise.race() to get first resolved
    const racePromise1 = new Promise((resolve) =>
      setTimeout(() => resolve("First from Race - 1s"), 1000)
    );
    const racePromise2 = new Promise((resolve) =>
      setTimeout(() => resolve("First from Race - 500ms"), 500)
    );

    Promise.race([racePromise1, racePromise2]).then((result) => {
      console.log("🏁 Race result:", result); // Expected: "First from Race - 500ms"
    });
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Advanced Promises Example</h2>
      {error && <p style={{ color: "red" }}>❌ Error: {error}</p>}
      {userData ? (
        <div> 
          <h3>User Info:</h3>
          <p>👤 Name: {userData.name}</p>
          <p>👤 street: {userData.address.street}</p>
          <p>👤 lat: {userData.address.geo.lat}</p>
          <p>📧 Email: {userData.email}</p>
          <p>🌍 City: {userData.address.city}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}

export default App;
