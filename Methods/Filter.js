//filter method is used to perform operation based on some condition and create new array
items = [1,2,3,4,5,6,7,8,9];

console.log("filter method");

let evenItem = (val) =>{
    if(val % 2 == 0){
        console.log(val);
    }
}

let newItems = items.filter((val) => {
        return val%2 == 0; // based on this condition value will be added in new array
    }
)

console.log("Items ", items);
console.log("newItems ", newItems);

console.log("Using arrow function as input");
items.forEach((evenItem))