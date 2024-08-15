//String, Number, Boolean, Null, Undefined, BigInt, Symbol == Primitive Data Types
//Objects - Array and Functions == Non Primitive Data Types

// Variable can be defined using var (old method), let and const
// we can modify - let and var variables not const except const object - where we can modify the key...
let fullname = 'Tony Stark';
let age = 34;
let isMale = true;
let salary = 1345.3334;
let x = null;
let y = undefined;

let _x = 111;
let x123 = 222;
let $x = 333;

let bigSalary = BigInt('45667');
let lastName  = Symbol('hypper');

console.log(fullname);
console.log(age);
console.log(isMale);
console.log(salary);
console.log(x);
console.log(y);
console.log(_x);
console.log(x123);
console.log($x);
console.log(bigSalary);
console.log(lastName);

//Object student contains - collection of values...
const student = {
    fullName : "Tony Stark",
    age : 24,
    rollNumber : 123,
};