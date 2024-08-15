console.log("For-OF Loop on Strings and Arrays");

let str = "JavaScript";
let sizeOfString = 0;

console.log("String is = ", str);

for(let val of str){
    console.log("val is = ", val);
    sizeOfString++;
}

console.log("Size of string is = ", sizeOfString);
