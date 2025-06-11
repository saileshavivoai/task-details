// Count Characters in a String
let str = "Hello, world!";
let count = str.length;
console.log("Number of characters:", count);

//Check if Palindrome

function isPalindrome(str) {
    let j = str.length - 1;
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[j]) {
            return false;
        }
        j--;
    }
    return true;
}
let word="madam";
console.log(isPalindrome(word));


// Get Current Date
    let today = new Date();
console.log(today);



//Repeat a String

let text = "Mooooo";
let repeated = text.repeat(7);
console.log(repeated);

//Truncate a String
function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "";
  } else {
    return str;
  }
}

console.log(truncateString("Monalisa",5));

//...1Get First Element

let arr = [58, 4, 6, 8, 12];
let FirstElement = arr[0];
console.log(FirstElement);

//2Sum of Array Elements

let array = [5, 3, 7, 13, 15]
let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log(sum)

//3Check if Array Includes a Value

const a = [10, 20, 30, 40, 50];
let n1 = 30,
	n2 = 45;

const r1 = a.includes(n1);

const r2 = a.includes(n2);

// Display results r1 and r2
console.log(n1, "is Present in Array:", r1);
console.log(n2, "is Present in Array:", r2);


//4Filter Even Numbers

let numbers = [10, 23, 12, 21, 44];
let even = [];
for(let i = 0; i < numbers.length; i++) {
       if (numbers[i] % 2 == 0)
       even.push(numbers[i]);
}
console.log(even);

//5Double Each Element
let Array= [5, 4, 11, 2, 9];
let Emptyarr = [];
function double(arr) {
for (let i = 0; i < arr.length; i++) {
Emptyarr.push(arr[i] * 2);
}
}
double(Array); 
console.log(Emptyarr); 


//1 Add two numbers
var A = 55;
var B = 22;
var C = A + B;
console.log(C); 

//2 Check if Number is Even

let number = 7;

if(number % 2 == 0) {
console.log("7 is even"); 
}
else {
console.log("7 is odd"); 
}

//3Capitalize the first letter

let A ="Monalisa";
function Capital(s){
if(!s){
return "";
}
else{
return s.charAt(0).toUpperCase()+s.slice(1);
}
}
console.log(Capital(word))

// maximum of two numbers

let number1 = 50;
let number2 = 49;

if(number1 > number2){
console.log("number1 is greater");
}
else{
console.log("number2 is greater");
}

//Reverse a string

let string = "Monalisa"; 
let ans = str.split('').reverse().join('');
console.log(ans); 