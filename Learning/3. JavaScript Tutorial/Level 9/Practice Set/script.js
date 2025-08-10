let newbtn = document.createElement("button");
newbtn.innerText= "Click Me";
newbtn.style.backgroundColor ="red";
newbtn.style.color="white";

document.querySelector("body").prepend(newbtn);

// question 2 

let para= document.querySelector("p");
para.setAttribute("class" ,"newclass");

// yeh method use nahi karte hai kyu ke ese mai direct value change ho jata hai 
let text= document.querySelector("h1")
text.classList.add("newheading");