let paraEle = document.querySelector("p");
console.log(paraEle.getAttribute("class"));
//paraEle.setAttribute("class", "newParaClass"); - it will remove previous class, so it we reuired to have previous one then we can use classList
console.log(paraEle.classList);
paraEle.classList.add("newParaClass");