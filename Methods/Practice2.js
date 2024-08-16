let marks = [22, 55, 77, 99, 93, 98, 95, 99, 91, 96, 33];

console.log(marks);

let nintyPlus = marks.filter((val) =>{
                                        return val > 90;
                                     }

)

console.log("Ninity plus marks ", nintyPlus);