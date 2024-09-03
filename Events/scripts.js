//Event handling from javaScript 
//Event handling from javaScript takes precedence over inline event handling 
//<nodeElementName>.<eventName> = (object) => {} i.e. btn1.onClick = (evt) => {}
//<nodeElementName>.addEventListener(<eventName>, <function>)
//<nodeElementName>.removeEventListener(<eventName>, <function>) // callback function should be same i.e btn2Handler2
//<nodeElementName>.classList.add(<className>) // to add class
//<nodeElementName>.classList.remove(<className>) // to remove class
 
// Manual trigger calling
// ---Create a new 'click' event
// var event = new Event('click');
// ----Dispatch it.
// resetBtn.dispatchEvent(event);

let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

btn1.ondblclick = (event) =>{

    console.log("mouse was double clicked using JavaScript");
    console.log(event);
    console.log(event.target);
    console.log(event.clientX, event.clientY);
}

/* using arrow function
btn2.addEventListener("click", () => {
    console.log("btn2 click");
})
*/

let btn2Handler1 = () =>{
    console.log("btn2 click from handle1 using addEventListener");    
}

let btn2Handler2 = (evt) =>{
    console.log("btn2 click from handle2 using addEventListener");    
    console.log(evt);    
}
let btn2Handler3 = () =>{
    console.log("btn2 click from handle3 using addEventListener");    
}

btn2.addEventListener("click", btn2Handler1);
btn2.addEventListener("click", btn2Handler2);
btn2.addEventListener("click", btn2Handler3);
btn2.removeEventListener("click", btn2Handler2);

let div2Ele = document.querySelector("#div2");
let bodyEle = document.querySelector("body");

bodyEle.onload = () =>{
    div2Ele.innerText = "This is div2 in Light Mode";
    div2Ele.classList.add("div2LightMode");
}

div2Ele.onmouseenter = () =>{
    div2Ele.innerText = "This is div2 in Dark Mode";
    div2Ele.classList.remove("div2LightMode");
    div2Ele.classList.add("div2DarkMode");
}

div2Ele.onmouseleave = () =>{
    div2Ele.innerText = "This is div2 in Light Mode";
    div2Ele.classList.remove("div2DarkMode");
    div2Ele.classList.add("div2LightMode");

}