let boxClass = document.querySelectorAll(".Box");
console.dir(boxClass);

for(let idx in boxClass){
    boxClass[idx].innerText = `inner text ${idx}`;
}