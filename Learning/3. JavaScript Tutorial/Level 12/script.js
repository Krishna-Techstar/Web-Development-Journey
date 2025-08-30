//  Callbacks in Synchronous!
// Method 1

function sum (a , b){
    console.log("Sum is =", a+b);
}

function calculator(a, b, sumcallback){
    sumcallback(a, b);
}

calculator (1, 2, sum);

// method 2

function calculator1(x, y, subtractcallback){
    console.log("Subtraction of this 2 are =", x-y);
}
calculator1(5,2, (x,y)=>{
     console.log(x-y)
}) 