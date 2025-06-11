// function firstElement(arr) {
//   return arr[0];
// }



// function analyzeArray(arr) {
//   return {
//     first: firstElement(arr),
//   };
// }
// const result = analyzeArray([1, 2, 3, 4, 5]);
// console.log(result);


// //Total Sum

// function sumArray(arr){
//     return arr.reduce((add,num) => add + num,0);
// }

// function analyzeArray(arr){
//     return{
//         sum : sumArray(arr)
//     };
// }
// let res = analyzeArray([1,2,3,4,5]);


// //List of even numbers

// function filterEven(arr){
//     return arr.filter(num => num%2 === 0);
// }

// function analyzeArray(arr){
//     return{
//         Even : filterEven(arr)
//     };
// }

// let r = analyzeArray([1,2,3,4,5]);

// //Double the element

// function doubleElements(arr) {
//   return arr.map(num => num * 2);
// }
// function analyzeArray(arr) {
//   return {
//     doubled: doubleElements(arr)
//   };
// }
// const op= analyzeArray([1, 2, 3, 4, 5]);





// //All in one function 

// function firstElement(arr) {                   // first element in array..
//   return arr[0];
// }

// function sumArray(arr) {                        //Sum of the elements in array..
//   return arr.reduce((add, num) => add + num, 0);
// }

// function filterEven(arr) {                       //Filter the even numbers in array..
//   return arr.filter(num => num % 2 == 0);
// }

// function doubleElements(arr) {                   //Double the each element in array..
//   return arr.map(num => num * 2);
// }

// function analyzeArray(arr) {
//   return {
//     first: firstElement(arr),
//     sum: sumArray(arr),
//     evens: filterEven(arr),
//     doubled: doubleElements(arr)
//   };
// }
// let output= analyzeArray([1, 2, 3, 4, 5]);



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

let n = 0;
do {
  console.log("Do...While Loop:", n);
  n++;
} while (n < 0);
  
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






// .map() – Transform Elements Create a new array by transforming each element.

const numbers = [1, 2, 3, 4];

const doubled = numbers.map(function(num) {
  return num * 2;
});

console.log(doubled); 

//.filter() – Select Elements Keep only the items that meet a condition.

//1.Keep even numbers only

const Num= [1, 2, 3, 4, 5, 6];

const evens = Num.filter(function(num) {
  return num % 2 === 0;
});

console.log(evens);

//2.Filter words longer than 4 letters

const words = ["Monaji", "abi", "sabarigirivasan", "prakash"];

const longWords = words.filter(function(word) {
  return word.length > 4;
});

console.log(longWords); 

//.reduce() – Collapse into One Reduce an array to a single value (e.g., total, max).

//1.Total sum of numbers

const num = [10, 40, 70, 25, 50];

const total = num.reduce(function(acc, curr) {
  return acc + curr;
}, 0);

console.log(total);

//2.Find max value in an array

const scores = [82, 2, 66, 100, 88,300];

const max = scores.reduce(function(acc, curr) {
  return curr > acc ? curr : acc;
}, 0);

console.log(max);

//.forEach() – Iterate Without Return Loop through array items without returning a new array.

//print each element

const Numbers= [10, 20, 30,40,50];

Numbers.forEach(function(num) {
  console.log(num);
});


//.find() – Locate the First Match Find the first element that meets a condition

const numb = [10, 25, 90, 80, 100];

const found = numb.find(function(num) {
  return num > 70;
});

console.log(found); 










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
}, 2000);                                        //2000 milli sec

// IIFE (Immediately Invoked Function Expression)

(function() {
  let message = "important";
  console.log(message); 
})();
