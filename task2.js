function firstElement(arr) {
  return arr[0];
}



function analyzeArray(arr) {
  return {
    first: firstElement(arr),
  };
}
const result = analyzeArray([1, 2, 3, 4, 5]);
console.log(result);


//Total Sum

function sumArray(arr){
    return arr.reduce((add,num) => add + num,0);
}

function analyzeArray(arr){
    return{
        sum : sumArray(arr)
    };
}
let res = analyzeArray([1,2,3,4,5]);


//List of even numbers

function filterEven(arr){
    return arr.filter(num => num%2 === 0);
}

function analyzeArray(arr){
    return{
        Even : filterEven(arr)
    };
}

let r = analyzeArray([1,2,3,4,5]);

//Double the element

function doubleElements(arr) {
  return arr.map(num => num * 2);
}
function analyzeArray(arr) {
  return {
    doubled: doubleElements(arr)
  };
}
const op= analyzeArray([1, 2, 3, 4, 5]);





//All in one function 

function firstElement(arr) {                   // first element in array..
  return arr[0];
}

function sumArray(arr) {                        //Sum of the elements in array..
  return arr.reduce((add, num) => add + num, 0);
}

function filterEven(arr) {                       //Filter the even numbers in array..
  return arr.filter(num => num % 2 == 0);
}

function doubleElements(arr) {                   //Double the each element in array..
  return arr.map(num => num * 2);
}

function analyzeArray(arr) {
  return {
    first: firstElement(arr),
    sum: sumArray(arr),
    evens: filterEven(arr),
    doubled: doubleElements(arr)
  };
}
let output= analyzeArray([1, 2, 3, 4, 5]);



//For Loop-The classic loop to run a block a fixed number of times.

for (let i = 0; i < 5; i++) {
  console.log("For Loop:", i);
}

//While Loop-Keep running while a condition is true.

let count = 0;
while (count < 5) {
  console.log("While Loop:", count);
  count++;
}


//Do...While Loop-Like while, but runs at least once.

let num = 0;
do {
  console.log("Do...While Loop:", num);
  num++;
} while (num < 0);

//For...of Loop-Perfect for looping through arrays and strings.

const a = [ 1, 2, 3, 4, 5 ];

for (const item of a) {
    console.log(item);
}


//For...in Loop-Ideal for iterating over object properties.

const person = {
  name: "John",
  age: 30,
  city: "Delhi"
};

for (let value in person) {
  console.log(value);             // prints each key (e.g., "name", "age", "city")
//   console.log(person[key]);     // prints each value (e.g., "John", 30, "Delhi")
} 

