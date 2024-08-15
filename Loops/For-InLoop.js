console.log("For-In Loop on Objects and Arrays");

let student={
    fullName : "Tony Stark",
    age : 34,
    rollNumber : 233,
}

for(let keyVal in student){
    console.log("key = ", keyVal, " value = ", student[keyVal]);
}