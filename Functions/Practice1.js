function getVowelsCount(ipStr){
    let vowelCount = 0;
    let newStr = ipStr.toUpperCase();
    for(let val of newStr){
        
        if(val == "A" || val == "E" || val == "I" || val == "O" || val == "U"){
            vowelCount = vowelCount + 1;
        }
    }
    return vowelCount;
}

let str = "I Love JavaScript";
console.log(`Vowels count in ${str} is `, getVowelsCount(str));