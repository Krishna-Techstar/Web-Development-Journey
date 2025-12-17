function getData(dataId){
    return new Promise((resolve , reject) =>{
        setTimeout(()=>{
            console.log("data", dataId);
            resolve("Success");
            
        },2000);
    });
}
// promise chaining

getData(1)
    .then((res) => {
        return getData(2);
    })
    .then((res) =>{
        return getData(3);
    })
    .then((res) => {
        console.log(res);
    });