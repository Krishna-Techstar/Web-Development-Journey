//                                      Funtion Level 7
let a , b;
function Sum(){
    let a= Number(prompt("Enter the Value of a"));
    let b= Number(prompt("`Enter the Value of b`"));
    sum=a+b;
    console.log(`sum is ${sum}`);
}

// with return value 

function sum(x , y){
    s=x+y;
    console.log("before return", s);
    return 0;
    console.log("after return"); // this statement will never get excuted
}

// yeh jo agrugement pass hoga bas wohi display hoga 
function message(msg){
    console.log(msg);
}

//                              Arrow Function
const arrow = (p, Q, R)=>{
     p= Number(prompt("Enter the Value of p"));
     Q= Number(prompt("Enter the Value of Q"));
    R= Number(prompt("Enter the Value of R"));
    s=p+Q;
    console.log("Sum Of Number are", s);
    m=p*R;
    console.log("Multiple of Number are", m);
}

// forEach Loops on arrays

let arr=["mumbai", "delhi", "kolkota", "banglore", "channai", "patna"]

    arr.forEach((val, idx)=> {
        console.log(arr);
        console.log(val.toUpperCase(), idx,     );}
);
