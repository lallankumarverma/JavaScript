let bodyEle   = document.querySelector("body");
let newBtnEle = document.createElement("button");
newBtnEle.innerText = "Click Me!";
newBtnEle.style.backgroundColor = "red";
newBtnEle.style.color = "white";
bodyEle.prepend(newBtnEle);