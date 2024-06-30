function multBy5(num){
    return num*5;
}

multBy5.power = 6;
console.log(multBy5(5));
console.log(multBy5.power);
console.log(multBy5.prototype);

//functions have fucntionalities of function but are objects too
//everything in javascript is an object

//when new keyword is used:
// A new object is created: the new keyword initiates the creation of a new javascript object.
// A protoype is linked: The newly created objects gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype

function createUser(name, price){
    this.name = name;
    this.price = price;
}
createUser.prototype.printMe= function(){
    console.log(`price: ${this.price}`)
}
createUser.prototype.increment= function(){
    this.price++;
}

const tea = createUser("lemon tea",30);     //this will not instantiate an object & the prototype will not be linked
const chai = new createUser("black tea",50);
chai.printMe();
// tea.printMe();  error