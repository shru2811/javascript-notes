const balance = 500.67
console.log(balance.toString().length);
console.log(balance.toFixed(1))     //precision after decimal -> 500.7

console.log(balance.toPrecision(1))     //5e+2
console.log(balance.toPrecision(2))     //5.0e+2
console.log(balance.toPrecision(3))     //return type String with precision 3 -> 501

const hund = 100000;
console.log(hund.toLocaleString('en-IN'));      //prints the string of number in indian number system -> 1,00,000

// -------------------MATH-------------------
console.log(Math)       //object
console.log(Math.round(5.6))       //round off -> 6
console.log(Math.ceil(5.6))         //integer larger than 5.6 but smallest -> 6
console.log(Math.floor(5.6))       //integer smaller than 5.6 but should be largest -> 5
console.log(Math.sqrt(8).toFixed(3))        //2.828

let min = 100
let max = 200

console.log(Math.floor((Math.random() * (max-min+1))+min));     //returns value between 100 to 200

