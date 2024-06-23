let score = "45"

let toNumber = Number(score);
console.log(toNumber)           //converted to 45 
console.log(typeof toNumber)        // number

let score2 = "Shruti"           //String with no digits
toNumber = Number(score2);
console.log(typeof toNumber)        // number
console.log(toNumber)           //converted to NaN

score = true;                       //boolean
toNumber = Number(score);
console.log(typeof toNumber)        // number
console.log(toNumber)           //converted to 1

score = null                        //null 
toNumber = Number(score);
console.log(typeof toNumber)        // number
console.log(toNumber)           //converted to 0

score = undefined                   //no definition of specific type
toNumber = Number(score);
console.log(typeof toNumber)        // number
console.log(toNumber)           //converted to NaN

let isLoggedIn = "Shruti";                      //string with some value is true in boolean
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn)
console.log(booleanIsLoggedIn)          //true

isLoggedIn = ""                             //empty string is false in boolean
booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn)
console.log(booleanIsLoggedIn)              //false

// ******************************************OPERATIONS******************************************

//string additions

console.log("2"+2) //22
console.log("2" + 2 + 2) //222
console.log(2 + "2" + 2) //222
console.log(2 + 2 + "2") //42


