let tgBtn1Ele = document.querySelector("#tgBtn1");
let bodyEle   = document.querySelector("body");
let currMode;

let changeMode = (evt) =>{

    if(currMode === "light"){
        currMode = "dark";
        bodyEle.classList.remove("lightMode");
        bodyEle.classList.add("darkMode");
        tgBtn1Ele.innerText = "Change mode to light";
    }
    else{
        currMode = "light";
        bodyEle.classList.remove("darkMode");
        bodyEle.classList.add("lightMode");
        tgBtn1Ele.innerText = "Change mode to dark";
    }
}

tgBtn1Ele.addEventListener("click", changeMode);

bodyEle.onload = () =>{
    currMode = "light";
    tgBtn1Ele.innerText = "Change mode to dark";
}