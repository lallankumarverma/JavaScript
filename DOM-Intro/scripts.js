// DOM is used to dynamically modify our html page contents. For this we will use Windows object - document
// Window object repsents open window of the browser. It is object of browser and it is automatically created by browser
console.log("Hello");
window.console.log("Hello2");

window.console.log(window.document);  //document i.e. dom is an object of window
window.console.dir(window.document);  //document i.e. dom is an object of window

console.log(document); // it will print document object
console.dir(document); // it will print document object properties and methods 
// both are same as console is part of window object... same goes for alert, prompt, document and so on..

console.dir(document.childNodes[0]); //<!DOCTYPE html>

console.dir(document.childNodes[1]); //<html lang="en">
console.dir(document.childNodes[1].childNodes[0]); //<head>
console.dir(document.childNodes[1].childNodes[1]); //# Text

console.dir(document.childNodes[1].childNodes[2]); //<body>
console.dir(document.childNodes[1].childNodes[2].childNodes[0]); //p
console.dir(document.childNodes[1].childNodes[2].childNodes[1]); //text
console.dir(document.childNodes[1].childNodes[2].childNodes[2]); //h1
console.dir(document.childNodes[1].childNodes[2].childNodes[3]); //text
console.dir(document.childNodes[1].childNodes[2].childNodes[4]); //div


