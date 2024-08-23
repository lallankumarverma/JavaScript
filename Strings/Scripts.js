//strings are immutable means value at memory of the string never change instead new memory location will be created. 

let str1 = "Tony Stark";
let str2 = 'Paper Pot';

console.log("str1 = ", str1);
//console.log("str2 = ", str2);

console.log("str1 length = ", str1.length); // length property
console.log("str1[0] = ", str1[0]); // index
console.log("str1[1] = ", str1[1]); // index

let str3 = `${str1} loves ${str2}`; // string template literals to embed variable in string - substitute
console.log(str3);

str3 = `value of 1 + 2 + 3 is ${1 + 2 + 3}`; // string template literals
console.log(str3);


let str4 = "Tony\nPaper"; // escape chars - new char and count as single chars
console.log(str4);
console.log(str4.length);

str4 = "Tony\tPaper"; // escape chars - tab char
console.log(str4);

console.log("str1 in uppercase = ", str1.toUpperCase());
console.log("str1 in lowercase = ", str1.toLocaleLowerCase());

let str5 = "  233 abc ";
console.log("str5 = ", str5, "with length = ", str5.length);

str5 = str5.trim();
console.log("After trim\nstr5 = ", str5, "with length = ", str5.length);

let str6 = "0123456789";
console.log("str6 = ", str6);
console.log("str6 from 1 to 3 = ", str6.slice(1,3)); // ending index is non inclusive
console.log("str6 from 0 to 5 = ", str6.slice(0,5)); // ending index is non inclusive
console.log("str6 from 5 = ", str6.slice(5)); // ending index is non inclusive

let str7 = "Counting from 0 to 9 is ".concat(str6);
console.log(str7);

let str8 = str6.replace("45", "FourFive");
console.log(str8);

str6 = "hhlloohhlloohhlloo";
console.log("str6 = ", str6);
str8 = str6.replaceAll("ll", "LL");
console.log(str8);

str6 = "Hello My World";
console.log("str6 = ", str6);
str8 = str6.charAt(1)
console.log("charAt 1 = ", str8);

//Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed
//let str9 = "This is another magic of science";
let str9 = "Welcome";
let newStr9 = str9.split(" ", str9.length); // splits the string and return array based on seperator
let reversed;

for(let val in newStr9){

    let newStr;

    if(newStr9[val].length >= 5){
       
       let word = newStr9[val];
       let newWord;

       for(let count = word.length; count >= 0; count--)
       {
           if(newWord !== undefined){
               newWord = newWord + word[count];
           }
           else{
               newWord = word[count];
           }    
       }

       newStr = newWord;
    }
    else{
        newStr = newStr9[val];
    }

    if(reversed !== undefined){
        reversed = `${reversed} ${newStr}`;
        }
    else{
            reversed = newStr;   
        }
}

console.log(reversed);