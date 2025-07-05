// function 
function constVowels(str)
{
  let count = 0;
    for (const char of str){
        if(  char === "a"  || char === "e" || char === "i"  || char ==="o"  || char ==="u" ){
            count++;
        }
    }
    return count;
}
  // arrow function

const countVow = (str) => {  
  let count = 0;
    for (const char of str){
        if(  char === "a"  || char === "e" || char === "i"  || char ==="o"  || char ==="u" ){
            count++;
        }
    }
    return count;
}

// forEach Loops on arrays

let arr=["mumbai", "delhi", "kolkota", "banglore", "channai", "patna"]

    arr.forEach((val, idx)=> {
        console.log(arr);
        console.log(val.toUpperCase(), idx,     );}
);