//this when called from browser will give window object

//this called in node will give empty parenthesis

//arrow functions

const addTwo = (num1, num2) => {
    return num1 + num2
}

const add = (num1 , num2) => num1+num2      //implicit return

console.log(add(1,3))

// const obj = () => {name:"Shruti"}       //undefined return
const obj = () => ({name:"Shruti"})       //use parenthesis, no need to use return keyword

console.log(obj())