                                // Object Utilities & Manipulation
// Check if Property Exists

let user = { name: "Abirami", age: 20, city:"Chennai" };

//  Using in operator
console.log("age" in user); 

//  Using hasOwnProperty()
console.log(user.hasOwnProperty("address")); 

// Using Object.hasOwn()
console.log(Object.hasOwn(user, "city"));

// Merge Two Objects

let obj1 = { name: "Abirami",age:19 };
let obj2 = { age: 20 ,location:"Chennai"};

// Using Object.assign()
let merged = Object.assign({}, obj1, obj2);
console.log(merged);

// Count Object Properties

let student = { name: "Abi", age: 17, grade: "A" };

let count = Object.keys(student).length;
console.log(count); 

// Delete a Property from Object

delete student.grade;
console.log(student);

// Get Values of Object

let car = { brand: "Tesla", model: "X", year: 2020 };

let value = Object.values(car);
console.log(value); 

