class User{
    constructor(email,password){
        this.email = email,
        this.password = password
    }
    get email(){        //if you define getter then it is compulsory to define a setter
        return `${this._email}shruti`;
    }
    set email(email){
        this._email = email;
    }
}

const user1 = new User("abc@gmail.com","123");
console.log(user1.email);
user1.email = "s@gmail.com";
console.log(user1.email);
