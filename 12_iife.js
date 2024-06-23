//immediately invoked function expression

(function hello() {
    console.log("Hello")
})();       //necessary as it is not able to know where the context ends without semicolon

( ()=>{
    console.log("hello again");
})();

//with parameters
((name)=>{
    console.log(name);
})("Shruti");