// Async and Await

function api(){
    return new Promise((resolve , reject) =>{
        setTimeout(() => {
            console.log("Weather Data");
            resolve(200);
        }, 2000);
    });
}
async function getWeatherData(){
    await api();
}
async function hello(){
    console.log(hello);
}


// our use case of get data

function getData(dataId){
    return new Promise((resolve , reject) =>{
        setTimeout(()=>{
            console.log("data", dataId);
            resolve("Success");
            
        },2000);
    });
}

async function getAllData() {
    console.log("getting data 1 ..");
    await getData(1);
    console.log("getting data 2 ..");
    await getData(2);
    console.log("getting data 3 ..");
    await getData(3);
    console.log("getting data 4 ..");
    await getData(4);
    console.log("getting data 5 ..");
    await getData(5);
    
}