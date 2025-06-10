// Add  Two Numbers

function add(a,b){
    return a+b;
}
let x=7;
let y=19;
console.log(add(x,y));

// Check Number is Even

function isEven(num){
    if(num%2==0){
        console.log("Number is even");
        
    }
    else{
        console.log("Number is not even");
    }
}
let num=15;
isEven(num);

// Capitalize First Letter

function CapitalizeFirstLetter(s){
    if(!s){
        return "";
    }
    else{
        return s.charAt(0).toUpperCase()+s.slice(1);
    }
}
let words="abirami";
console.log(CapitalizeFirstLetter(words));

// Find Maximum of Two Numbers

function MaximumOfTwoNum(a,b){
    if(a>b){
        console.log(a);
    }
    else{
        console.log(b);
        
    }
}
let num1=12,num2=24;
MaximumOfTwoNum(num1,num2);

// Reverse a String

function reverseString(str){
    var newstr="";
    for(var i=str.length -1;i>=0;i--){
        newstr=newstr+str[i];
    }
    return newstr;
}

console.log(reverseString("hello"));

// Array Functions
// Get the first element

let arr=[7,2,3,1,8,5];
console.log(arr[0]);

// Sum of Array Elements

let array=[1,3,5,7,9];
let sum=0;
for(var i=0;i<array.length;i++){
    sum=sum+array[i];
}
console.log(sum);

// Check if Array Includes a Value

const values=[8,5,3,2,0,7];
let check=10;
console.log(values.includes(check));

// Filter Even Numbers

let value=[1,2,6,5,8,4,3];
let even=[];
for(var i=0;i<value.length;i++){
    if(value[i]%2==0){
        even.push(value[i]);
    }
}
console.log(even);


// Double Each Element

let nums=[2,4,6,8,3];
for(var i=0;i<nums.length;i++){
    nums[i]=nums[i]*2;
}
console.log(nums);


// Strings
// Count Characters in a String

let str="abirami";
console.log(str.length);

// Check if Palindrome

function isPalindrome(str){
     var rev_Str="";
    for(var i=str.length -1;i>=0;i--){
        rev_Str=rev_Str+str[i];
    }
    if(str==rev_Str){
        console.log("String is palindrome");
    }
    else{
        console.log(" String is not palindrome");   
    }
}
let String="noon";
isPalindrome(String);

// Get Current Date

const getCurrentDate=new Date();
const formattedDate = getCurrentDate.toDateString();
console.log(formattedDate);

// Repeat a String

let text = "hello";
let repeatedText = text.repeat(3);
console.log(repeatedText); 

// Truncate a String

function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num);
  } else {
    return str;
  }
}
let word="The quick brown fox jumps over the lazy dog"
console.log(truncateString(word, 7));
