class user{
    constructor(username, email){
        this.username = username;
        this.email = email;
    }
    encryptPassword(){
        return `${this.username}`
    }

    //static : a function that belongs to the class itself, not to any specific instance of the class.
    //Static fields are properties that exist only once per class, not on every instance you create.
    static universityName = "UPES";
}

const shivi = new user("shivi2302","shivi@mail.com");
console.log(shivi.encryptPassword());
//older way of class creation in js
function User(username, email){
    this.username = username;
    this.email = email;
}

User.prototype.encryptPassword = function(){
    return `${this.username}`
}

const Shivi = new User("Shivi2302","shivi@mail.com");
console.log(Shivi.encryptPassword())




//inheritance

class Teacher extends user{
    constructor(username, email, subject){
        super(username, email);
        this.subject = subject;
    }
    addCourse(){
        console.log("add course to teacher");
    }
}

const tea = new Teacher("T1","T1@gmail.com","Web development")

console.log(tea instanceof Teacher)
console.log(tea instanceof User)

console.log(user.universityName)
// console.log(tea.universityName())      raise error
console.log(Teacher.universityName)
