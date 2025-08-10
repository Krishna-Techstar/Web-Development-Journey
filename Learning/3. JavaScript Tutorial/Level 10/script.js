let btn1= document.querySelector("#btn1");
btn1.onclick = () =>{
    console.log("btn1 was click");
    let a=25;
    b=a++;
    console.log("valuw of a =",b ,a);
}

let box= document.querySelector("div");

box.onmouseover = () =>{
    console.log("your are Inside div");
};

let btn2= document.querySelector("#btn2");
    btn2.onclick = (evt)=>{
        console.log(evt.type);
        console.log(evt.target);
        console.log(evt.clientX, evt.clientY);
    };

let box2= document.querySelector("#box2");
    box2.onmouseover = (evt)=>{
             console.log(evt.type);
        console.log(evt.target);
        console.log(evt.clientX, evt.clientY);
    };


    // using event listeners

    let but3= document.querySelector("#but3");

    
    btn3.addEventListener("click",(evt) =>{
        console.log("Button was Click - handler1");
    });
    btn3.addEventListener("click",() =>{
        console.log("Button was Click - handler2");
    });
    btn3.addEventListener("click",() =>{
        console.log("Button was Click - handler3");
    });
    btn3.addEventListener("click",() =>{
        console.log("Button was Click - handler4");
    });

      
    // btn3.removeEventListener("click",() =>{
    //     console.log("Button was Click - handler3");
    // });


    /// to remove a function 

    const handler5=() =>{
        console.log("Button was Click - handler5");
    };
  btn3.addEventListener("click",handler5);

btn3.removeEventListener("click", handler5);