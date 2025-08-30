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

// callback hell 
// baically call back hell is nested call backs 

function getData(dataId, getNextData){

    setTimeout(()=>{
        console.log("Data",dataId);
        if(getNextData){
          getNextData();
        }
    }, 2000);
}

getData(1, ()=>{
    console.log("calling data 2...")
    getData(2, ()=>{
        console.log("calling data 3...")
    getData(3, ()=>{
        console.log("calling data 4...")
    getData(4, ()=>{
        console.log("calling data 5...")
    getData(5, ()=>{
    
});
});
});
});
});