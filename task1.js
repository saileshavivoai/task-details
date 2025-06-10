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

