// Concept of Promise Chaining

function AsyncFun(){
    return new Promise((resolve , reject ) =>{
        setTimeout(()=>{
            console.log("Data 1");
            resolve("Succes");
        }, 4000);
    });
}

function AsyncFun1(){
    return new Promise((resolve , reject ) =>{
        setTimeout(()=>{
            console.log("Data 2");
            resolve("Succes");
        }, 4000);
    });
}

console.log("Fetching Data1......");

let p1 = AsyncFun();
p1.then((res) =>{
    console.log(res)
});

console.log("Fetching Data2......");

let p2 = AsyncFun1();
p2.then((res) =>{
    console.log(res)
});

// the issue is here that both promise are comming after 4 sec so both is giving output at once but we need differently 
// like firstly p1 should excute then p2

// so then we use concept of promise chaining

function AsyncFun3(){
    return new Promise((resolve , reject ) =>{
        setTimeout(()=>{
            console.log("Data 3");
            resolve("Succes");
        }, 4000);
    });
}

function AsyncFun4(){
    return new Promise((resolve , reject ) =>{
        setTimeout(()=>{
            console.log("Data 4");
            resolve("Succes");
        }, 4000);
    });
}

console.log("fetching data 3...");
let p3 = AsyncFun3();
p3.then((res)=>{
    console.log(res);
    console.log("fetching data 4..");
    let p4 = AsyncFun4();
    p4.then((res) =>{
        console.log(res);
    })
});

// More optimised way of doing this would be 

function AsyncFun5(){
    return new Promise((resolve , reject ) =>{
        setTimeout(()=>{
            console.log("Data 5");
            resolve("Succes");
        }, 4000);
    });
}

function AsyncFun6(){
    return new Promise((resolve , reject ) =>{
        setTimeout(()=>{
            console.log("Data 6");
            resolve("Succes");
        }, 4000);
    });
};
console.log('Fetching data 5...');
AsyncFun5().then(() => {

    console.log("fetching data 6....");
    AsyncFun6().then(()=>{

    });
})