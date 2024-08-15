let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
let avgMark = 0;
for(let mark of marks){
    sum = sum + mark; 
}

avgMark = sum/marks.length;
console.log(marks);
console.log("Avg marks is ", avgMark);