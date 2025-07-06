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

// arr of no print sqr of each using forEach 


    let arr=[1,2,3,4,5,6,7,8,9,10]
        arr.forEach((val, idx)  =>{
            console.log(val*val, idx);
        }
        )

//                  filter out marks of student greater then 90 

let arrays = [ 55, 91, 94, 97 ,34, 56, 67, 87, 90, 98, 99, 100];

        let newArrays = arrays.filter((val) => {
            return val>=90;
        })
    console.log(newArrays);

//                  take no n as input form user create array 1 to n reduce method to calculate sum and product of array 

let n = prompt("Enter the Numbers in Array");
        let array= [];
for( let i=1; i<=n; i++){
    array[i-1]=i;
}
console.log(array);
const output = array.reduce((prev, curr) =>{
    return prev + curr;
});
console.log(output);
const output1 = array.reduce((prev1, curr2) =>{
    return prev1 * curr2;
});
console.log(output1);