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
