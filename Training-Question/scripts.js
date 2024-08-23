//Find the sum of all the multiples of 3 or 5 below 1000.
function solution(number){
    let sum = 0;
    
    for(let count = 1; count <number; count++){
  
      if(count % 3 === 0 || count % 5 === 0)
      {
          sum = sum + count;
      }
    }
  
    return sum;
  }

//write a function that takes a string and return a new string with all vowels removed.
function removeVowels(string){
    
    /*
    let returnString;
    let newStrList = string.split(" ", string.length);

    for(let val of newStrList){

        let newString = val;

        for(let count = 0; count <= val.length; count++)
        {
          if(val.charAt(count) === 'a' || val.charAt(count) === 'e' || val.charAt(count) === 'i' || val.charAt(count) === 'o' || val.charAt(count) === 'u' ||
             val.charAt(count) === 'A' || val.charAt(count) === 'E' || val.charAt(count) === 'I' || val.charAt(count) === 'O' || val.charAt(count) === 'U'){
    
            newString = newString.replaceAll("A", ""); 
            newString = newString.replaceAll("a", ""); 
            newString = newString.replaceAll("E", ""); 
            newString = newString.replaceAll("e", ""); 
            newString = newString.replaceAll("I", ""); 
            newString = newString.replaceAll("i", ""); 
            newString = newString.replaceAll("O", ""); 
            newString = newString.replaceAll("o", ""); 
            newString = newString.replaceAll("U", ""); 
            newString = newString.replaceAll("u", ""); 
          }   
        }

        if(returnString !== undefined){
            returnString = `${returnString} ${newString}`;
        }
        else{
            returnString = newString;
        }
    }

    return returnString;*/
    
    return string.replace(/[aeiou]/gi, '');
}


//write a function maskify, which changes all but the last four characters into '#'.
function maskify(cc){

    let returnCC;
    let maskifyPart;
    let leftPart;

    if(cc.length > 4)
    { 
        maskifyPart = cc.slice(0, (cc.length - 4));
        maskifyPart = maskifyPart.replace(/[A-Za-z0-9]/gi, "#"); // replace any chars with #
        leftPart = cc.slice((cc.length - 4), cc.length);

        returnCC = maskifyPart + leftPart;
    }
    else{
        returnCC = cc;
    }

    return returnCC;
}

//Implement the function unique_in_order which takes as argument a sequence and returns a list of items without 
//any elements with the same value next to each other and preserving the original order of elements.
function uniqueInOrder(iterable){

    let newStrList = [];
    let countItem  = 0;
    let lastChar;
    
    for(let val of iterable){
        
        if(lastChar !== val){
            lastChar = val;
            newStrList[countItem++] = lastChar;
        } 
    }

    return newStrList;
}

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
//The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). 
//The next words should be always capitalized.

function toCamelCase(str){

    let countItem  = 1;
    let returnStr  = "";
    let newStrList = str.replace(/[_-]/gi, "-"); // replace dash/underscore char with -
    newStrList     = newStrList.split("-", newStrList.length); // to get words in array list

    for(let val of newStrList){
        
        if(countItem !== 1){
            let newStr = val.charAt(0).toUpperCase() + val.slice(1);
            returnStr  = returnStr + newStr;
        }
        else{
            returnStr  = returnStr + val;
            countItem++}
    }

    return returnStr;
}

//Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
function pigIt(str){

    let returnStr  = "";
    let newStrList = str.split(" ", str.length); // to get words in array list

    for(let val of newStrList){

        
        if(val.search(/[A-Za-z0-9]/) != -1 ){
            let newStr = val.replace(val.charAt(0), "") + val.charAt(0) + "ay";
            returnStr  = `${returnStr} ${newStr}`;
        }
        else{
            returnStr  = `${returnStr} ${val}`;
        }

    }

    return returnStr.trim();
    
}

//Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
function humanReadable (seconds) {
    
    let hoursVal    = 0;
    let minutesVal  = 0;
    let secondsVal  = 0;
    let remaining   = 0;

    if(seconds > 359999){
        return '';
    }
    else{
        hoursVal   = parseInt(seconds/3600);
        remaining  = seconds%3600;
        minutesVal = parseInt(remaining/60);
        secondsVal = remaining%60;
    }
    
    return `${leftFillNum(hoursVal,2)}:${leftFillNum(minutesVal,2)}:${leftFillNum(secondsVal,2)}`;
}

function leftFillNum(num, targetLength) {
    return num.toString().padStart(targetLength, "0");
  }

//The goal of this exercise is to convert a string to a new string where each character in the new string is 
// "(" if that character appears only once in the original string, or 
// ")" if that character appears more than once in the original string. 
//Ignore capitalization when determining if a character is a duplicate.
function duplicateEncode(word){

    let wordList     = word.split("");
    let wordListCopy = wordList;
    let returnVal    = '';
    
    for(let oriVal of wordList){

        let countVal = 0;

        for(let val of wordListCopy){

            if(oriVal.toUpperCase() === val.toUpperCase()){
                countVal++;
            }
        }
        
        if(countVal === 1)
            returnVal = returnVal + "(";
        else{
            returnVal = returnVal + ")";
        } 
    }
    
    return returnVal;
}

//populate array from start to end
const arrayRange = (start, stop, step) =>
    Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
);

//remove duplicate item from array
function removeDuplicates(arr) {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}

function incrementString (string) {
    
    let strEnd = 0;
    let number = 0; 
    let numPart;
    let strPart;

    for(let count = string.length - 1; count >= 0 ;count--){
        
        let numIem = parseInt(string[count]);
        
        if(isNaN(numIem)){
           strEnd = count;
           strEnd++;
           break;     
        }
    }

    strPart = string.substring(0, strEnd);
    numPart = string.substring(strEnd, string.length);
    
    //if numpart is blank then add 0
    if(numPart === ''){
        numPart = '0';
    }

    number  = (parseInt(numPart) + 1).toString();
    numPart = number.padStart(numPart.length, 0);

    console.log(string);
    console.log('strPart ',strPart);
    console.log('numPart ', numPart);

    return `${strPart}${numPart}`;
}

//Complete the solution so that it strips all text that follows any of a set of comment markers passed in. 
//Any whitespace at the end of the line should also be stripped out.
function solution(text, markers) {
  
    for(let markerItem of markers){

        if(text.includes(markerItem) !== true){
            continue;
        }
      
        text = stripString(text, markerItem); 
    }

    if(text[text.length - 1] === '\n') {
        return text;
    } 
    else{
        return text.trimEnd();
    }
}

function stripString(string, stripChar){

    let stripCharStart = false;
    let charProcess    = "";
    let returnVal      = "";

    for(let count = 0; count < string.length; count++){

        if(string[count] == stripChar){
            stripCharStart = true;
            continue;
        }
        else{
            
            if(stripCharStart === true){
                
                if(string[count] === '\n'){
                    stripCharStart = false;
                    charProcess    = string[count];
                }
                else{
                    continue;
                }
            }
            else{

                stripCharStart = false;
                charProcess    = string[count]; 
            }    
        }
        
        if(charProcess === '\n'){
            
            if(returnVal[returnVal.length - 1] !== '\n'){
                returnVal = returnVal.trimEnd();
            }
        }
      
        returnVal = returnVal + charProcess;
    }

    return returnVal;
}




