class User{
    name;
    email;

    constructor(name, email){
        //console.log("User constructor called");
        this.name = name;
        this.email = email;
    }

    viewData(){
        //console.log("User viewData method called");
        console.log("name  = ", this.name, ", email = ", this.email);
    }
}

class Admin extends User{

    editData(userObj, name, email){
        userObj.name  = name;
        userObj.email = email;
    }
}

let stuObj1     = new User("Arjun", "arjun@gmail.com");
let stuObj2     = new User("Karan", "karan@gmail.com");
let teacherObj1 = new User("Mike", "mike@gmail.com");

let adminObj    = new Admin(); // we will use single object to edit all user data

console.log("Before Edit stuObj1");
stuObj1.viewData();

adminObj.editData(stuObj1, "ArjunSmith", "arjunsmith@gmail.com");

console.log("After Edit stuObj1");
stuObj1.viewData();

console.log("Before Edit stuObj2");
stuObj2.viewData();

adminObj.editData(stuObj2, "KaranSmith", "karansmith@gmail.com");

console.log("After Edit stuObj2");
stuObj2.viewData();

console.log("Before Edit teacherObj1");
teacherObj1.viewData();

adminObj.editData(teacherObj1, "Mike Tyson", "miketyson@gmail.com");

console.log("After Edit teacherObj1");
teacherObj1.viewData();

