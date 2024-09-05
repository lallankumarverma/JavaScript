// Promise is a class object that provide solution for callbacks hell problem
// Promise has three states - pending, fulfilled, reject
// if we create object first time state will be set as pending
// if we call resolve function handler then state will be set as fulfilled
// if we call reject function handler then state will be set as reject

//promise.then  to handle resolve section
//promise.catch to handle reject section


let promiseObj = new Promise((resolve, reject) => {
    resolve("success");
    //reject("Failed");
})

console.log(promiseObj);

promiseObj.then((res) => {
    console.log("promise.then => ", res);
})

promiseObj.catch((err) => {
    console.log("promise.catch => ", err);
})

function getPromiseData(dataId) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            console.log("getData for id: ", dataId);
            resolve("success");
        }, 4000)

    })
}

let promiseData = getPromiseData(1);
console.log(promiseData);

// promise chaining
promiseData.then((res) => {
    console.log("promise res for 1", res);
    console.log("fetching data for 2....");
    getPromiseData(2).then((res) => {
        console.log("promise res for 2", res);
        console.log("fetching data for 3....");
        getPromiseData(3).then(() => {
            console.log("promise res for 3", res);
        });
    });
})

function getUserIDPromiseObj(userId) {
    return new Promise((resolve, reject) => {

        setTimeout(() =>{
            console.log("userId: ", userId);
            resolve("success");
        }, 20000)
    })
}

function getUserPwdPromiseObj(pwd) {
    return new Promise((resolve, reject) => {

        setTimeout(() =>{
            console.log("pwd: ", pwd);
            resolve("success");
        }, 20000)
    })
}

console.log("fetching user id.....");
let userIDPromise = getUserIDPromiseObj("admin");

userIDPromise.then((res) =>{

    console.log("userIDPromise res ", res);
    console.log("fetching user pwd.....");
    let usePwdPromise = getUserPwdPromiseObj("12345");
    usePwdPromise.then((res) =>{
        console.log("usePwdPromise res ", res);
    })
})
  