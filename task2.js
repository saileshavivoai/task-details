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

