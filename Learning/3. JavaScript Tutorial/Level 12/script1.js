// How to Use Promise
let promise = new Promise((resolve , reject) => {
    console.log("I am a Promise");
    resolve("An Error occurred Due to code");
});
const getPromise = () => {
    return new Promise((resolve, reject)=>{
        console.log("I am Promise 1");
        resolve("SuccessFul");
    });
};

let SecPromise = getPromise();
SecPromise.then((res)=>{
    console.log("Promise Fullfied");
});
SecPromise.catch((err) => {
    console.log('there is an error');
})
