const user = new Object()
console.log(user)       //singleton object

//nested objects
const regUser = {
    email: "sdhsnfj@gmail.com",
    fullname:{
        firstname:"Shruti",
        lastname:"Srivastava",
    }
}
console.log(regUser.fullname.firstname)     //to access nested element
console.log(regUser.fullname?.firstname)     //if fullname doesnt exist it wont create error

//join two objects
let obj1 = {
    1:'a',
    2:'b',
}

let obj2 = {
    3:'c',
    4:'d',
}
let obj3 = Object.assign({},obj1, obj2) //{} target and obj1 and 2 are combined and added to {}
//another way
let obj4 = {...obj1, ...obj2};
console.log(obj3);
console.log(obj4);

console.log(Object.keys(obj1));     //[1,2]
console.log(Object.values(obj1));       //[a,b]
console.log(Object.entries(obj1));       //[[1,a],[2,b]]
console.log(obj1.hasOwnProperty('1'))       //true
console.log(obj1.hasOwnProperty(1))         //true
console.log(Object.hasOwnProperty('3'))     //false


