console.log("For-In[index] Loop on Objects and Arrays");

let student={
    fullName : "Tony Stark",
    age : 34,
    rollNumber : 233,
}

//Iterate index inside the objects
for(let keyVal in student){
    console.log("key = ", keyVal, " value = ", student[keyVal]);
}