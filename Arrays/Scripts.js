let marks = [97, 88, 77, 56, 44, 33]; // Arrays are mutable

console.log(marks);
console.log("marks length = ",marks.length);
console.log("marks typeof = ",typeof marks);

let heroes = ["IronMan", "AntMan", "SuperMan", "Thor", "DeadPool", "BatMan"];
console.log("Heroes = ", heroes);
console.log("heroes at 4 ", heroes[4]);

let info = ["Ironman", 23, 'NewYork', "USA"];
console.log("info = ", info);

console.log("Heroes = ", heroes);
heroes[1] = "Wasp"; // here we can change the value but not in string as string is immutable
console.log("Heroes at index 1 changed = ", heroes);

console.log("Iteration using for loop");
for(let idx = 0; idx < heroes.length; idx++){
    console.log(heroes[idx]);
}

console.log("Iteration using for-In loop");
for(let idx in heroes){
    console.log(heroes[idx]);
}

console.log("Iteration using for-of loop");
for(let val of heroes){
    console.log(val);
}

console.log("Push method"); // modified original array - add end of array
console.log("Before push Heroes = ", heroes);
heroes.push("Hulk");
console.log("After push Heroes = ", heroes);


console.log("Pop method"); // modified original array - delete from end of array
console.log("Before pop Heroes = ", heroes);
let heroRemoved = heroes.pop();
console.log("Hero removed ", heroRemoved);
console.log("After pop Heroes = ", heroes);

console.log("toString method"); // return new string
console.log(heroes.toString());

console.log("concat method"); // return new string
let mHeroes   = ["Ironman", "Spiderman", "Hulk"];
let dcHeroes  = ["Superman", "Batman"];
let iHeroes   = ["Shaktiman", "Krish"];
let allHeroes = mHeroes.concat(dcHeroes, iHeroes);

console.log(mHeroes);
console.log(dcHeroes);
console.log(iHeroes);
console.log(allHeroes);

console.log("Unshift method"); // modified original array - add start of array
console.log("Before unshift Heroes = ", heroes);
heroes.unshift("Hulk");
console.log("After unshift Heroes = ", heroes);


console.log("Shift method"); // modified original array - delete start of array
console.log("Before shift Heroes = ", heroes);
heroRemoved = heroes.shift();
console.log("Hero removed ", heroRemoved);
console.log("After shift Heroes = ", heroes);


console.log("slice method"); // return new string
console.log(allHeroes);
console.log(allHeroes.slice(2, 5)); // end index non inclusive

console.log("Splice (start, NumOfdelItems, newItems) method"); // modified original array - (start, NumOfdelItems, newItems)

let numList = [11,22,33,44,55,66,77,88];
console.log(numList);
numList.splice(2, 2, 100, 200, 300); // start from idx 2, delete 2 item, then add 100, 200, 300 
console.log("After splice splice(2, 2, 100, 200, 300) ", numList);

numList = [11,22,33,44,55,66,77,88];
console.log(numList);
numList.splice(2, 0, 100, 200, 300); // start from idx 2, delete 0 item, then add 100, 200, 300
console.log("After splice splice(2, 0, 100, 200, 300) ", numList);

