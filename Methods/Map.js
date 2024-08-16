//map method is used to perform operation and create new array
let itemsList = [1, 2, 3, 4, 5, 6];

console.log("map method");

let sRoot = (val) => {
    return val **2;
}

let newitemsList = itemsList.map(sRoot);
console.log("Items ", itemsList);
console.log("newItems ", newitemsList);