//object literal
const mySym = Symbol('key');
const obj = {
    name:"Shruti",
    // mySym: "symbol value",
    [mySym]: "SymbolValue",
    age: 20,
    email: "sshruti.2811@gmail.com",
    lastloggedIn: ["Monday","Wednessday"],
    1: "hello"
}

//accessing object elements
console.log(obj.email);
console.log(obj["lastloggedIn"]);
// console.log(obj.1);      error
console.log(obj[1])     //wordks well
console.log(obj.mySym);
console.log(typeof obj.mySym)       //String
console.log(obj[mySym])
console.log(typeof mySym)      //symbol

//values overwrite
obj.age = 19;
console.log(obj.age)
// Object.freeze(obj);     //locks the object no more overwrites
obj.age=20;
console.log(obj);

//can create functions as an elements too
obj.func = function(){
    console.log("function inside an object")
}
console.log(obj.func)       //[Function (anonymous)]
console.log(obj.func())        //function inside an object undefined

//accessing the objects elements from the function in the same object
obj.func2 = function(){
    console.log(`hello ${this.name}`);
}
obj.func2();        //no undefined will come now.
// console.log(obj.func2())
