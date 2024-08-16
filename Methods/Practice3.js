let limit = prompt("enter the limit?");
let array = []; // initialize array

for(let count = 0; count < limit; count++){

    array[count] = count + 1;
}

console.log("New array ", array);

let sumArray = array.reduce((prev, curr) => {
                                                return prev + curr;
                                            }
);

console.log("sum of array elements", sumArray);

let prodArray = array.reduce((prev, curr) => {      
                                                return prev * curr;
                                             }
);

console.log("product of array elements", prodArray);