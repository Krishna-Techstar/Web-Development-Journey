/// conditional statements 

// if statement

let color;
let mode = prompt ("Please enter your mode (dark/light)");

if(mode==="dark"){
    color="black";
    console.log("Your mode is dark", color);
}

if (mode==="dark")
{
    color="black";
}
else{
    color="white";
}
console.log("mode is :", color);

// else if
// age bracket 
let age = prompt ("Please Enter Your Age");

if(age<18){
    console.log("Junior");
}
else if(age<59){
    console.log("adult");
}else if(age>61 && age<=100)
    console.log("Old Adult");
    else{
        console.log ("Age Can't exist");
    }