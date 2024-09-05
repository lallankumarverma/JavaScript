// async keyword is used to add at beginning of function to call as async that return promise as object
// await keyword is used inside async function to wait until function execute and resolve/reject

function getData(dataId) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log("getData dataId ", dataId);
            resolve("success");
        }, 4000);
    })
}

/*
async function getAllData() {
    console.log("fetching data1......");
    await getData(1);
    console.log("fetching data2......");
    await getData(2);
    console.log("fetching data3......");
    await getData(3);
    console.log("fetching data4......");
    await getData(4);
}

getAllData();// we have to call... 
*/

// IIFE - Invoked Immediately Function Expression - execute automatically only one time 
/*
(async function () {

    console.log("fetching data1......");
    await getData(1);
    console.log("fetching data2......");
    await getData(2);
    console.log("fetching data3......");
    await getData(3);
    console.log("fetching data4......");
    await getData(4);

})();
*/

function getUserID(userId) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("getUserId: ", userId);
            resolve("success");
        }, 5000)
    })
}

function getUserPwd(userPwd) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("getUserPwd: ", userPwd);
            resolve("success");
        }, 5000)
    })
}

async function getUserData(){
    console.log("fetching user id.......");
    await getUserID("admin");
    console.log("fetching user pwd.......");
    await getUserPwd("12345");
}

getUserData();