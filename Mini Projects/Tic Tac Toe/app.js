let boxes = document.querySelectorAll(".box");
let resetbtn= document.querySelector("#reset-btn");

let turnO= true; // playerx player0

const Winningpattern =[
    [0,1,2],
    [0,4,5],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("The Box Was Clicked"); 
        box.innertext="abcd";
    })
})