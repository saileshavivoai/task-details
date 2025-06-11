// This function cuts the content to 100 characters

function truncateString(text) {
  if (text.length > 100) {
    return text.slice(0, 100) + "...";
  }
  return text;
}

// This function counts how many words are in the content

function charCount(text) {
  return text.trim().split(" ").length;
}

// This function returns today’s date in YYYY-MM-DD format

function getCurrentDate() {
  const today = new Date();
  return today.toISOString().split("T")[0];
}

// This function checks if the title is a palindrome

function isPalindrome(text) {
  const lower = text.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversed = lower.split("").reverse().join("");
  return lower === reversed;
}

// Main function that uses all the above

function blogPreview(title, content) {
  return {
    preview: truncateString(content),
    wordCount: charCount(content),
    date: getCurrentDate(),
    isTitlePalindrome: isPalindrome(title)
  };
}


const title = "My Blog";
const content = "This is a blog post for beginners. We will use JavaScript functions to get some details about the post.";

const result = blogPreview(title, content);
console.log(result);



//.map() – Transform Elements Create a new array by transforming each element.

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

const words = ["Mona", "abi", "sabarigirivasan", "divya", "prakash"];

const longWords = words.filter(function(word) {
  return word.length > 4;
});

console.log(longWords); 

//.reduce() – Collapse into One Reduce an array to a single value (e.g., total, max).

//1.Total sum of numbers

const num = [10, 40, 70, 25];

const total = num.reduce(function(acc, curr) {
  return acc + curr;
}, 0);

console.log(total);

//2.Find max value in an array

const scores = [82, 2, 66, 100, 88];

const max = scores.reduce(function(acc, curr) {
  return curr > acc ? curr : acc;
}, 0);

console.log(max);

//.forEach() – Iterate Without Return Loop through array items without returning a new array.

//print each element

const Numbers= [10, 20, 30];

Numbers.forEach(function(num) {
  console.log(num);
});


//.find() – Locate the First Match Find the first element that meets a condition

const numb = [10, 25, 60, 80, 40];

const found = numb.find(function(num) {
  return num > 70;
});

console.log(found); 
