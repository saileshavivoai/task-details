let arr = [10,20,30,40];
let sum = 0;
if(Array.isArray(arr)){

    for(let i=0;i<arr.length;i++){
        sum += arr[i];
    }
    console.log(sum);
}else{
    console.log("No valid array");
}

//Get Current Date

const date = new Date();
