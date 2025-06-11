//  Personal Info Formatter

// capitalize() to format the name.

function capitalize(name){
    if(!name) return "";
    else  return name.charAt(0).toUpperCase()+name.slice(1);
}

// isEven() to check if age is even

function isEven(age){
  return age%2==0;
}

//  add() to add 5 to the age.

function add(a,b){
    return a+b;
}

function personInfo(name, age) {
  const formattedName = capitalize(name);
  const evenOrOdd = isEven(age) ? "even" : "odd";
  const futureAge = add(age, 5);

 return `Hello, ${formattedName}! Your age (${age}) is ${evenOrOdd}. In 5 years, you'll be ${futureAge}.`;
}


let str="abirami";
let age=20;
console.log(personInfo(str,age));


// Function Types
// Function Declaration

function myFunction(){
  console.log("Hello..");
}
myFunction();

// Function Expression

let areaOfRect=function(width,height){
  return width*height;
}
console.log(areaOfRect(4,6));

// Arrow Function 

let greet = () => "Hello World!";
console.log(greet());

// Anonymous Function
setTimeout(function() {
  console.log("This runs after 2 seconds");
}, 2000);

// IIFE (Immediately Invoked Function Expression)

(function() {
  let message = "A function from IIFE";
  console.log(message); 
})();

// Loop Types 
// For Loop

for(let i=1;i<5;i++){
  console.log(i);  
}

// While Loop
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// Do...While Loop
let num = 0;
do {
  console.log("Count: " + num);
  num++;
} while (num < 0);

// For...of Loop
let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
  console.log(fruit);
}

let text = "hello";
for (let char of text) {
  console.log(char);
}

// For...in Loop

let person = { name: "Abirami", age: 20, city: "Chennai" };
for (let key in person) {
  console.log(key + ": " + person[key]);
}

// Array Methods
// .map() – Transform Elements

let nums = [1, 2, 3];
let square = nums.map(num => num * num);
console.log(square); 

// .filter() – Select Elements

let numbers = [1, 2, 3, 4];
let evens = numbers.filter(num => num % 2 === 0);
console.log(evens); 

// .reduce() – Collapse into One

const number = [1, 2, 3, 4];
const total = number.reduce((sum, curr) => sum + curr, 0);
console.log(total); // 10

// .forEach() – Iterate Without Return
const fruit = ["apple", "banana", "cherry"];
fruit.forEach(fruits => {
  console.log(fruits);
});

// .find() – Locate the First Match

let marks=[45,98,99,65];
let search = marks.find(num => num % 2 === 0);
console.log(search);
