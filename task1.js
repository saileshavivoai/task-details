
// getFirstElement in array

let arr = [1,2,3,4,5];
let first = arr[0];
console.log(first);


//Sum of Array Elements

let a = [4, 8, 7, 13, 12];
let sum = 0;
for (let i = 0; i < a.length; i++) {
    sum += a[i];
}
console.log(sum);


//Check if Array Includes a Value

let b = [4,8,7,13,12];
let n1 = 13;
let n2 = 15;
// const c = b.includes(n);  //using the includes() function..
// console.log(n,"present in the array",c);

    
function check(value) {
	for (let i = 0; i < a.length; i++) {
		if (a[i] == value)
        return value + " is present";  // return if the value is found...
	}
	return value + " is not present";  //return if the value is not found..
}

console.log(check(n1));
console.log(check(n2));


// Find Even numbers in an array
let num = [22,23,24,25,26];
let even = [];                  //create empty array for the output..
for(let i=0;i<num.length;i++){
    if(num[i]%2==0){           
        even.push(num[i]);      // if the number is divisible by 2 it is a even number..
    }
}

console.log(even);


// Double the each element in array 
let d = [1, 2, 3, 4, 5];
let newArr = [];
function double(arr) {
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2);
    }
}
double(d);                // call the function
console.log(newArr);      // printing the Output


//Add two numbers
const num1 = 5;
const num2 = 3;
const num3 = num1 + num2;  // add two numbers
console.log(num3);         // display the num3

//Check if number is even

const number = 5;

if(number % 2 == 0) {
    console.log("The number is even.");  //check if the number is even
}
else {
    console.log("The number is odd.");   // if the number is odd
}


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

let str = "Sabari gv";                         //String input
let ans = str.split('').reverse().join('');
console.log(ans);                              //String reversed output       


//Capitalize the first letter

let word ="sabari";
function Capital(s){
    if(!s){
        return "";
    }
    else{
        return s.charAt(0).toUpperCase()+s.slice(1);
    }
}
console.log(Capital(word));


//Count Characters in a String

let s="sabarigirivasan";
let count = s.length;
console.log(count);

//Repeat a string

let text = "Sabari";
let repeated = text.repeat(7);
console.log(repeated);


//Check if Palindrome
let w="madam";

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
console.log(isPalindrome(w));

//Truncate a String
function truncateString(str, num) {
    if (str.length > num) {
        return str.slice(0, num) + "";
    } else {
        return str;
    }
}
console.log(truncateString("Sabarigiri",6));

//get current date



