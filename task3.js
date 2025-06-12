//Create User Object

let user = {
  name: "Mona",
  age: 21,
  email: "monachandrasekaran@avivo.ai"
};
console.log(user);

//Update Object Property

user.age = 22; // Updating age
user.email = "monachandrasekaran@gmail.com"; // Updating email
console.log(user);

//Convert Object to JSON

let jsonString = JSON.stringify(user);
console.log(jsonString);


//Parse JSON String

let parsedUser = JSON.parse(jsonString);
console.log(parsedUser);


// //List Object Keys

let keys = Object.keys(user);
console.log(keys);
keys.forEach(key => console.log(key));


//Check if Property Exists

let user1 = {
  Name: "MOOOOOO",
  Age: 21
};

console.log("Name" in user1); // true
console.log("email" in user1); // false
console.log(user1.hasOwnProperty("Age")); // true


//Merge Two Objects

let obj1 = { name1: "Monaa" };
let obj2 = { Age1: 21, email: "@mona@gmail.com"};

let merged = Object.assign({}, obj1, obj2);
console.log(merged);

//Count Object Properties

let user2 = {
  Name1: "John",
  age1: 21,
  email: "mooo@example.com"
};

let count = Object.keys(user2).length;
console.log(count); 

//Delete a Property from Object

let user3 = {
  name3: "John",
  age3: 25,
  email: "moooo@example.com"
};

delete user.age;
console.log(user3);


//Get Values of Object

let user4 = {
  name4: "John",
  age4: 25,
  email: "john@example.com"
};

let values = Object.values(user4);
console.log(values);






