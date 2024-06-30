//A task to create a method trueLength, that will count the length of string by removing leading and trailing zeroes
//we can add protoypes at any level of object
//Array -> Object -> null
//String -> Object -> null
//function -> Object -> null
//one by one the prototype checked at current object level and then parent object level if not found on the current level
//for eg

let highestObj = {
    name:"ABC"
}
let arr = [1,2,4,6];
Array.prototype.sayLoud = function(){
    console.log("array says hello");
}

arr.sayLoud();
// highestObj.sayLoud()        here the sayLoud will not be found

//task

String.prototype.trueLength = function(){       //method created for String
    return this.trim().length;
}

let str = "    Shruti          "    
console.log(str.trueLength());

//inheritance
const User = {
    name:"Shruti",
    email: "sshr2811"
}
const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable: true,
}
const TAsupport = {
    __proto__: TeachingSupport,     //old syntax of inheritance
    makeAssignment: "JS assignment for students",
}

Teacher.__proto__ = User;       //inherited user property into teacher //old syntax

//modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher);     //sets the Teacher property to be inherited in the teaching support
