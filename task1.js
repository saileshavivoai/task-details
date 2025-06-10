
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


