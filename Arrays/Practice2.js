let items = [250, 645, 300, 900, 50];
let offerPer = 10;

console.log("Items = ", items);

for(let idx in items){
    //console.log("item at index ", idx, " is ", items[idx]);
    let newValue = items[idx] - ((items[idx] * offerPer)/100);
    //console.log(newValue);
    items[idx] = newValue;
}

console.log("Items after 10% offer = ", items);