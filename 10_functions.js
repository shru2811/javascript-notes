//default parameters

function userLogIn(username = "Shruti"){
    return `${username} logged in`
}

console.log(userLogIn())        //uses default parameter
console.log(userLogIn("Srishti"))       //argument passed

//function with objects

function cartPrice(num1, num2, ...num){
    return num
}

console.log(cartPrice(10,20,30,30,40,50))       //[ 30, 30, 40, 50 ]

//calling before function declaration

console.log(addTwo(23))     //wont raise an error

function addTwo(num){       
    return num + 2
}

console.log(addOne(23))     //raise an error    because we cannot use a varibale before its declaration

const addOne = function(num){
    return num + 1
}
