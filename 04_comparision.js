//comparision among same datatypes is same as other languages

//problem comes when different data types are compared
console.log("2"==2);   // returns true
console.log("2">1);     //as here in these it converts the string to number and then compare

console.log(null == 0)      //in equality check conversion doesnt happens
console.log(Number(null));  //we saw it converts into 0 on converting it into number
console.log(null > 0)   //it is not preditable
console.log(null < 0)
console.log(null >= 0)      //sometimes it converts into NaN or 0 inconsistencies in the JS
console.log(null <= 0)

//=== -> strict equality check

console.log("2"===2)        //false

//Datatypes summary

//primitive 7types: Number, String, Boolean, null, undefined, Symbol, BigInt
//non primitive (reference): Array, Objects, Functions

console.log(typeof null)        //object type

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId) //false

const heros = ["Krishna", "Shiva", "Ramchandra"];
let obj = {
    name: "Shruti",
    age: 20
}
const myFunc = function(){
    console.log("Hello World");
}

console.log(typeof myFunc)  //function

//stack (primitive)  heap (Non primitive)
//whenever a copy of primitive type made and changes in the copy will not be reflected in the original
//whenever the copy of the non primitive type made and changes in the copy will be reflected in the original as it is stored in heap.