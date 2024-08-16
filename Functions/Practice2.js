let vowelCount = (ipStr) =>{
    let newStr = ipStr.toUpperCase();
    let vowelCount = 0;
    for(let val of newStr){
        if(val == "A" || val == "E" || val == "I" || val == "O" || val == "U"){
            vowelCount = vowelCount + 1;
            }
        }        
    return vowelCount;
}

console.log(vowelCount("I Love JavaScript"));