// DOM is used to dynamically modify our html page contents. For this we will use Windows object - document

// Methods----
// getElementById - return id
// getElementsByClassName - return html collection of the class
// getElementsByTagName - return html collection of the tag
// querySelector - return first element based on id/tag/class
// querySelectorAll - return all elements based on id/tag/class - for <class> we have to use .<className>, for <id> we have to #<id>
// createElement - to create new element using tag

// Properties
// tagName - return tagName of the element
// firstChild - return first child of the node including text, comments
// firstElementChild - return first element child
// lastChild - return last child of the node including text, comments
// lastElementChild - return last element child
// getAttribute - return attribute value of the attribute name
// setAttribute - set attribute value of the attribute name
// Ele.classList.add("newParaClass"); - to add new class without removing previous one
// Ele.classList.remove("newParaClass"); - to remove class without removing previous one


//childNodes   - return html collection of all child nodes including text, comments, element
//childeren    - return html collecton of all element child
//innerText    - return text of all visible child nodes get/set
//textContent  - return text of all child nodes where they are visiblie or not get/set 
//innerHTML    - return html text of all child nodes get/set
//node.style   - to get/set inline style of the html element
//node.append  - to add new element at end of inside of node
//node.appendChild - same as append but = 1 - only accept node type of child not strings, 2 - return appended node, 3 - will add one ele at a time.  
//node.prepend - to add new element at start of inside of node
//node.before  - to add new element at outside before the node 
//node.after   - to add new element at outside after the node 
//node.remove  - to remove node
//node.removeChild - same as remove but return the removed child so later we can user it if required.

let head    = document.getElementById("head");
let h1      = document.getElementById("h1heading");
let div1    = document.getElementById("div1");
let h4      = document.getElementById("h4heading");
let p1      = document.getElementById("p1");
let btn1    = document.getElementById("btn1");
let paras   = document.getElementsByTagName("p");

let h1ByClass = document.getElementsByClassName("heading-class"); // return html collection

console.log("By ID");
console.dir(head);
console.dir(h1);
console.dir(div1);
console.dir(h4);
console.dir(p1);
console.dir(btn1);

console.log("Using getElementsByClassName for class heading-class");
console.dir(h1ByClass);

console.log("Using getElementsByTagName for tag p");
console.dir(paras);

let firstEl = document.querySelector("p");
console.log("Using querySelector for tag p");
console.dir(firstEl);

let allEl   = document.querySelectorAll("p");
console.log("Using querySelectorAll for tag p");
console.dir(allEl);

firstEl = document.querySelector(".heading-class");
console.log("Using querySelector for class heading-class");
console.dir(firstEl);

allEl   = document.querySelectorAll(".heading-class");
console.log("Using querySelectorAll for class heading-class");
console.dir(allEl);

let div2 = document.querySelector("#div2");
let div3 = document.querySelector("#div3");

console.log("Using getAttribute of div3 for id and name");
console.log(div3.getAttribute("id"));
console.log(div3.getAttribute("name"));

console.log("Using setAttribute of div3 for name");
console.log("Before setAttribute ",div3.getAttribute("name"));
div3.setAttribute("name", "NEWdiv3Name");
console.log("After setAttribute ",div3.getAttribute("name")); 

console.log("Properties based on tagName"); // return tagName of the element
console.dir(head.tagName);
console.dir(h1.tagName);
console.dir(div1.tagName);
console.dir(h4.tagName);
console.dir(p1.tagName);
console.dir(btn1.tagName);

console.log("Property of body firstchild");
console.dir(document.body.firstChild); // it may return #text due to whitspace..
console.dir(document.body.firstElementChild); // so to resolve this we can user firstElementChild.

console.log("Property of body lastchild");
console.dir(document.body.lastElementChild);

console.log("Property body children");
console.dir(document.body.children); // it will return all ELEMENT type child nodes as html collection

console.log("Property body childNodes");
console.dir(document.body.childNodes); // it will return all child nodes as html collection - including element, #text, comment 

console.log("Property body innerText");
console.dir(document.body.innerText); // it will return all child nodes text

console.log("Property body innerHtml");
console.dir(document.body.innerHTML); // it will return all child html text  

console.log("Property div2 innerText and innerHtml");
console.dir(div2.innerText); 
console.dir(div2.innerHTML); 

console.log("Property hidden div3 innerText, textContent and innerHtml");
console.dir(div3.innerText); // does not return any inner text as element is hidden, so for this we can use textContent
console.dir(div3.textContent);
console.dir(div3.innerHTML);

console.log(div2.style); // inline style 
console.log(div2.style.color); // inline style - so nothing will come
div2.style.color = "blue"; // to set style color of div2 from green(css) to blue
console.log(div2.style.color);


//Fruits node
let h3FruitsEle = document.querySelector("#h3Fruits");
let ulFuitsEle  = document.querySelector("#ulFruits");

// to add new fruits
let newliElePapaya = document.createElement("li"); // to create new element by passing tag
newliElePapaya.innerText = "Papaya";
ulFuitsEle.append(newliElePapaya); // to add new fruit at end of node (inside)

// to add new fruits
let newliEleWatermelon = document.createElement("li"); // to create new element by passing tag
newliEleWatermelon.innerText = "Watermelon";
ulFuitsEle.prepend(newliEleWatermelon);

//new node Veggie before - Fruits
let newEleVeggie = document.createElement("h3");
newEleVeggie.innerText = "Vegitables";
h3FruitsEle.before(newEleVeggie);

// new node Milk after Fruits
let newEleMilk = document.createElement("h3");
newEleMilk.innerText = "Milk";
ulFuitsEle.after(newEleMilk);

//removing the h5 element
let removeh5Ele = document.querySelector("h5");
removeh5Ele.remove();
