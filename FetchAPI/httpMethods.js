let btnGet = document.querySelector("#btnGET");
let btnGetLast = document.querySelector("#btnGETLast");
let btnPost = document.querySelector("#btnPOST");
let btnPut = document.querySelector("#btnPUT");
let btnPatch = document.querySelector("#btnPATCH");
let btnDelete = document.querySelector("#btnDELETE");
let pEle = document.querySelector("#apiResult");

let lastObjectId;

const getAllObjects = async () => {

    let apiResult = "";
    let apiAll = "https://api.restful-api.dev/objects";
    console.log("fetching GET result.......", apiAll);

    let response = fetch(apiAll);
    let data = (await response).json();

    data.then((result) => {

        for (let resVal of result) {
            apiResult = apiResult + "</br>" + resVal.id + "-" + resVal.name;
        }

        pEle.innerHTML = apiResult;
    })
}

const getLastObject = async () => {

    let apiResult = "";
    let apiLast = "https://api.restful-api.dev/objects/" + lastObjectId;

    console.log("fetching GET Last result.......", apiLast);

    if (lastObjectId == null) {
        pEle.innerHTML = "Last object Id is blank.";
        return;
    }

    let response = fetch(apiLast);
    let data = (await response).json();

    data.then((result) => {
        apiResult = "Last Object - " + "</br>" + "ID: " + result.id + "</br>" + "Name:" + result.name + "</br>" + JSON.stringify(result.data, null, 2);
        pEle.innerHTML = apiResult;
    })
}

const addObject = async () => {

    let apiResult = "";
    let apiAdd = "https://api.restful-api.dev/objects";

    console.log("fetching POST result.......", apiAdd);

    // Define the data you want to create
    const createData = {
        "name": "Samsung 23 Ultra",
        "data": {
            "year": 2023,
            "price": 2000.99,
            "CPU model": "AMD 8 Gen",
            "Hard disk size": "526 GB",
            "color": "White"
        }
    };

    // Convert the data to JSON format
    const jsonData = JSON.stringify(createData);

    // Define the URL of the server endpoint
    const url = apiAdd;

    // Configure the fetch options
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: jsonData
    };

    let response = fetch(url, options);
    let data = (await response).json();

    data.then((result) => {
        apiResult = "Created Object - " + "</br>" + "ID: " + result.id + "</br>" + "Name:" + result.name + "</br>" + JSON.stringify(result.data, null, 2);
        lastObjectId = result.id;
        pEle.innerHTML = apiResult;
    })
}

const updateObject = async () => {

    let apiResult = "";
    let allUpdate = "https://api.restful-api.dev/objects/" + lastObjectId;

    console.log("fetching PUT result.......", allUpdate);

    // Define the data you want to update
    const updateData = {
        "name": "Samsung 24 Ultra",
        "data": {
            "year": 2024,
            "price": 2049.99,
            "CPU model": "AMD 8 Gen",
            "Hard disk size": "1 TB",
            "color": "black"
        }
    };

    // Convert the data to JSON format
    const jsonData = JSON.stringify(updateData);

    // Define the URL of the server endpoint
    const url = allUpdate;

    // Configure the fetch options
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: jsonData
    };

    let response = fetch(url, options);
    let data = (await response).json();

    data.then((result) => {
        apiResult = "Updated Object - " + "</br>" + "ID: " + result.id + "</br>" + "Name:" + result.name + "</br>" + JSON.stringify(result.data, null, 2);
        pEle.innerHTML = apiResult;
    })
}

const patchObject = async () => {

    let apiResult = "";
    let allUpdate = "https://api.restful-api.dev/objects/" + lastObjectId;

    console.log("fetching PATCH result.......", allUpdate);

    // Define the data you want to update
    const updateData = {
        "name": "Samsung 24 Plus",
    };

    // Convert the data to JSON format
    const jsonData = JSON.stringify(updateData);

    // Define the URL of the server endpoint
    const url = allUpdate;

    // Configure the fetch options
    const options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: jsonData
    };

    let response = fetch(url, options);
    let data = (await response).json();

    data.then((result) => {
        apiResult = "Updated Object - " + "</br>" + "ID: " + result.id + "</br>" + "Name:" + result.name + "</br>" + JSON.stringify(result.data, null, 2);
        pEle.innerHTML = apiResult;
    })
}

const deleteObject = async () => {

    let apiResult = "";
    let apiDelete = "https://api.restful-api.dev/objects/" + lastObjectId;

    console.log("DELETE Last object.......", apiDelete);

    if (lastObjectId == null) {
        pEle.innerHTML = "Last object Id is blank.";
        return;
    }

    // Configure the fetch options
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    // Define the URL of the server endpoint
    const url = apiDelete;

    let response = fetch(url, options);
    let data = (await response).json();

    data.then((result) => {
        pEle.innerHTML = result.message;
    })

}

btnGet.addEventListener("click", getAllObjects);
btnGetLast.addEventListener("click", getLastObject);
btnPost.addEventListener("click", addObject);
btnPut.addEventListener("click", updateObject);
btnPatch.addEventListener("click", patchObject);
btnDelete.addEventListener("click", deleteObject);