//reduce method is used to perform operation and reduce to single item
let numItem = [2, 4, 5, 71, 8, 11, 4, 48, 3, 9];

console.log("reduce method");
console.log("numItem ", numItem);

let maxItem = numItem.reduce((prev, curr) => {
                                                if(prev < curr){
                                                    prev = curr;
                                                }
                                                return prev;
                                             }
);

console.log("Max item ", maxItem);

let minItem = numItem.reduce((prev, curr) => {
    if(prev > curr){
        prev = curr;
    }
    return prev;
 }
);

console.log("Min item ", minItem);

let sumItem = numItem.reduce((prev, curr) => {
    return prev + curr;
 }
);

console.log("Sum item ", sumItem);