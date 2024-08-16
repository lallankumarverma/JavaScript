function toGetSum(ipFirst, ipSecond){
    let sum = ipFirst + ipSecond;
    console.log(`Sum of ${ipFirst} and ${ipSecond} is ${sum}`);
}

function toGetMultiply(ipFirst, ipSecond){
    let result = ipFirst * ipSecond;
    return result;
}

toGetSum(10, 10);
toGetSum(10, 20);
toGetSum(10, 30);

console.log("Multiply of 10 and 30 is ", toGetMultiply(10, 30));

let arrowSum = (ipFirst, ipSecond) =>{
    return ipFirst + ipSecond;
}

console.log("Sum of 10 and 20 from arrowSum is ", arrowSum(10, 20));