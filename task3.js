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




