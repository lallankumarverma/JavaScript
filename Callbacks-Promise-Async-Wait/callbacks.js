//setTimeout(<function handler>, <milliseconds>)

// using arrow function
setTimeout(() => {
    console.log("setTimeout using arrow function");
}, 4000);

let funcPrint = () => {
    console.log("called funcPrint");
}

setTimeout(funcPrint, 4000); // immediately called with above setTimeout

function getData(dataId, getNextData) {

    setTimeout(() => {
        console.log("getData for id: ", dataId);
        // if exist then call
        if (getNextData) {
            getNextData();
        }
    }, 4000)
}

// callbacks hell - nesting of callbacks.....
getData(1, () => {
    console.log("fetching data for 2....");
    getData(2, () => {
        console.log("fetching data for 3....");
        getData(3, () => {
            console.log("fetching data for 4....");
            getData(4);
        });
    });
});
