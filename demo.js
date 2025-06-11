
let number=5;
if(number % 2 == 0){
    console.log("5 is even")
}else{
    console.log("5 is odd")
}

let numbers = [1, 2, 3, 4, 5, 6, 7];
let even = [];
for(let i = 0; i < numbers.length; i++) {
       if (numbers[i] % 2 == 0)
       even.push(numbers[i]);
}
console.log(even);
