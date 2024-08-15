console.log("For-OF(value) Loop on Strings and Arrays");

let str = "JavaScript";
let sizeOfString = 0;

console.log("String is = ", str);

//Iterate val inside the objects
for(let val of str){
    console.log("val is = ", val);
    sizeOfString++;
}

console.log("Size of string is = ", sizeOfString);
