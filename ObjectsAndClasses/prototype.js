//this keyword is used to access the members of object where it is being used
//prototype object automatically added to each object we are creating
// __proto__ is used to set the existing object as prototype to any object.. i.e. Course.__proto__ = Student

const Student = {
    Name: "Karan",
    RollNumber: 12,

    printDetails(){
        console.log("From Student printDetails method");
        console.log("Name = ", this.Name);
        console.log("RollNumber = ", this.RollNumber);
    },

    printConsol(){
        console.log("From Student printConsol method");
    }
}

const Course = {
    CourseName: "Mtech",

    //override super method..
    printDetails(){
        console.log("From Course printDetails method");
        console.log("CourseName = ", this.CourseName);
    }    
}

Course.__proto__ = Student; // Course object inherite data and method of Student object using __proto__ keyword

console.log("Details from Student object ----------");
console.log(Student);
console.log(Student.Name);
console.log(Student.RollNumber);
Student.printDetails();
Student.printConsol();

console.log("Details from Course object ----------");
console.log(Course);
console.log(Course.Name);
console.log(Course.RollNumber);
console.log(Course.CourseName);
Course.printDetails(); // this will call override 
Course.printConsol(); // this wil call inheritate 
