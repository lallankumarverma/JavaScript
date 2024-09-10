// fetch() is used to fetch the response data. It return promise i.e let promise = fetch(url, [option])
// return value is json, we have to parse it in json object using json() 

const catFactsApiURL = "https://cat-fact.herokuapp.com/facts";
const jokeApiURL     = "https://official-joke-api.appspot.com/random_joke";
const uniApiURL      = "http://universities.hipolabs.com/search?country=India";
const ipApiURL       = "https://api.ipify.org/?format=json";
let btnCatFacts      = document.querySelector("#btnCatFacts");
let btnJoke          = document.querySelector("#btnJoke");
let btnUni           = document.querySelector("#btnUni");
let btnIP            = document.querySelector("#btnIP");
let pEle             = document.querySelector("#apiResult");

const catFactsApiResult = async () => {

    let apiResult  = "";
    pEle.innerHTML = "";

    console.log("fetching apiResult....", catFactsApiURL);

    // fetch return promise data object in json format
    let response = await fetch(catFactsApiURL);

    // now we have to parse it json object using json() method... input json return json object
    let data = await response.json();

    if (data.length > 0) {
        for (let dataVal of data) {
            //console.log(data);
            //console.log(dataVal.text);
            //console.log(dataVal.name);
            //pEle.innerHTML = pEle.innerHTML + "<br/>" + dataVal.name;

            if(dataVal.text){
                apiResult = apiResult + "<br/>" + dataVal.text;
            }
            else if(dataVal.name){
                apiResult = apiResult + "<br/>" + dataVal.name;
            }
        }
      }
    else{
       apiResult = data.setup + "<br/>" + data.punchline;
    }

    pEle.innerHTML = apiResult;
}

const jokeApiURLResult = async () => {

    let apiResult  = "";
    pEle.innerHTML = "";

    console.log("fetching apiResult....", jokeApiURL);

    // fetch return promise data object in json format
    let response = await fetch(jokeApiURL);

    // now we have to parse it json object using json() method... input json return json object
    let data  = await response.json();
    apiResult = data.setup + "<br/>" + data.punchline;
    pEle.innerHTML = apiResult;
}

const uniApiURLResult = async () => {

    let apiResult  = "";
    pEle.innerHTML = "";

    console.log("fetching apiResult....", uniApiURL);

    // fetch return promise data object in json format
    let response = await fetch(uniApiURL);

    // now we have to parse it json object using json() method... input json return json object
    let data = await response.json();

    if (data.length > 0) {
        for (let dataVal of data) {
                apiResult = apiResult + "<br/>" + dataVal.name;
            }
        }
    pEle.innerHTML = apiResult;
}

function getIP(){

    pEle.innerHTML = "";

    fetch(ipApiURL).then((response) =>{
        return response.json();
    }).then((data) => {
        pEle.innerHTML = data.ip;
    })
}

btnCatFacts.addEventListener("click", catFactsApiResult);
btnJoke.addEventListener("click", jokeApiURLResult);
btnUni.addEventListener("click", uniApiURLResult);
btnIP.addEventListener("click", getIP);
