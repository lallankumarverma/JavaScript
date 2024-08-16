//forEach is also called as Higher order function/method becuase they can take input as function or return function as value

let marks = [99, 55, 66, 33, 57, 77];
let cities = ["delhi", "mumbai", "pune", "keral"];

console.log("Using function definition");
marks.forEach(function getVal(val){
                                    console.log(val);
                                  }
)

console.log("Using arrow function definition");
//value at each index of the array
marks.forEach((val) =>{
                        console.log(val);
                      }   
)

console.log("Using arrow function definition with more params");
marks.forEach((val, idx, marks) =>{
    console.log(val, idx, marks);
  }   
)

console.log("Using arrow function definition for cities");
//value at each index of the array
cities.forEach((val) =>{
                        console.log(val.toUpperCase());
                      }   
)

console.log("Using arrow function as input");

let items = [1, 2, 3, 4, 5];

let suqareRoot = (val) =>{
    console.log(`Square root of ${val} is `, val**2);
}

items.forEach((suqareRoot))