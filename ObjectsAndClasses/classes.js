//extends keyword used to inheritance super class
//super() must called in drive class before access property of super using this
class Student{

    name;
    rollNumber;
    course;

    constructor(name, rollNumber, course){
        console.log("Student constructor called");
        this.name = name;
        this.rollNumber = rollNumber;
        this.course = course;
    }

    setDetails(name, rollNumber, course){
        console.log("Student setDetails called");
        this.name = name;
        this.rollNumber = rollNumber;
        this.course = course;
    }

    getDetails(){
        console.log("Student getDetails called");
        console.log("Name = ", this.name);       
        console.log("RollNumber = ", this.rollNumber);       
        console.log("Course = ", this.course);       
    }
}

class Course extends Student{

    courseCode;
    courseDuration;

    constructor(name, rollNumber, course, courseCode, courseDuration){
        
        super();
        console.log("Course constructor called");
        this.name = name;
        this.rollNumber = rollNumber;
        this.course = course;        
        this.courseCode = courseCode;
        this.courseDuration = courseDuration;
    }

    getDetails(){
        console.log("Course getDetails called");
        super.getDetails(); // to call super method
        console.log("CourseCode = ", this.courseCode);       
        console.log("CourseDuration = ", this.courseDuration);       
    }
}

let StObj1 = new Student(); // Setting data members using obj
StObj1.name = "Arjun";
StObj1.rollNumber = 1;
StObj1.course = "Btech";
console.log(StObj1);
StObj1.getDetails();

let StObj2 = new Student("Karan", 2, "MTech"); // Setting data members using constructor
console.log(StObj2);
StObj2.getDetails();

let StObj3 = new Student(); // Setting data member using member method
StObj3.setDetails("Prem", 3, "MCA");
console.log(StObj3);
StObj3.getDetails();

let CourseObj = new Course("Kishor", 2838, "BCA", "BCA001", 4);
CourseObj.getDetails();