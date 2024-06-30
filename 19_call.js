function setUserName(username){
    //complex DB calls then sets the username
    this.username = username;
}

function createUser(username, password, email){
    // setUserName(username)   //this will set the username for the context of setUsername
    setUserName.call(this, username)
    this.email = email,
    this.password = password
}

const chai = new createUser("chai2024", "123", "chai@fb.com")
console.log(chai);      
//You can use call() to write a method that can be used on different objects.