let modeBtn = document.querySelector("#mode");

modeBtn.addEventListener("click", () =>{
console.log("Your are trying to change mode");
});

let modeBtn1 = document.querySelector("#mode1");
let currMode= "light";

modeBtn1.addEventListener("click", () =>{
    if (currMode ==="light"){
        currMode="dark";
        document.querySelector("body").style.backgroundColor = "black";
    }else{
        currMode="light";
        document.querySelector("body").style.backgroundColor = "white";
    }

    console.log(currMode);
});

/// method 2 by classes
let modeBtn2 = document.querySelector("#mode2");
let body=document.querySelector("body");
let RecentMode= "light";

modeBtn2.addEventListener("click", () =>{
    if (RecentMode ==="light"){
        RecentMode="dark";
        body.classList.add("dark");
    }else{
        RecentMode="light";
        body.classList.add("Light");
    }
    console.log(RecentMode);
});
