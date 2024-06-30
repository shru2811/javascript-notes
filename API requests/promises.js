//  some operations like network requests, encrypting, etc takes time in these cases promises used to asynchronize the program flow, so that other operations doesnt block due to some time taking operations  

//promise is eventual completion object

new Promise(function(resolve,reject){
    setTimeout(()=>{console.log("promise")
        // reject();
        resolve();
    },2000);
}).then(function(){
    console.log("resolved");
})

const promiseTwo = new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("promise2");
        resolve({username:"Shruti2811", email:"sshruti.2811@gmail.com"});       //resolve will pass the data recieved to use it at backend
    },5000);
}).then(function(user){         //then recieves data from resolve
    console.log(user);
})

console.log("statement after promise");     //this executed without blocking at the setTimeout

const promiseThree = new Promise(function(resolve,reject){
    let error = false;
    if(error){
        reject("Something went wrong");
    }
    else{
        resolve({username:"Shruti Srivastava", email:"sshruti.2811@gmail.com"});
    }
})

promiseThree
.then((user)=>{
    console.log(user);
    //lets say we want to use the data somewhere else we need to return it
    return user.username;
})
.then((username)=>{
    //this will recieve the data returned from above return statement
    console.log(username);
})
.catch(function(error){
    //this will catch the error raised by reject!
    console.log(error)
})
.finally(function(){
    console.log("This finally will always execute either promise rejected or resolved")
})


const promiseFour = new Promise(function(resolve,reject){
    let error = true;
    if(error){
        reject("error in async promise function");
    }
    else{
        resolve({username:"JAavscript", email:"js.gmail.com"});
    }
})

async function consumePromiseFour(){
    try{
        const response = await promiseFour;     //promise returned 
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}

consumePromiseFour()

//fetching api
//Fetch API in JavaScript returns a Promise. When you make a fetch request, it asynchronously fetches data from a specified URL and returns a Promise that resolves to a Response object. You can then use .then() or await to handle the response data
fetch('https://api.github.com/users/shru2811')
.then((response)=>{
    return response.json();
}).then((json)=>{
    console.log(json);
}).catch((error)=>{
    console.log(error);
})

//using async syntax
// The await keyword in JavaScript is used to wait for a Promise to be resolved before continuing execution of the async function.
async function fetchAPI(){
    try {
        const data = await fetch('https://api.github.com/users/shru2811');
        const resp = await data.json();
        console.log(resp);
    } catch (error) {
        console.log(error);
    }
}

fetchAPI();

//fetch doesnt reject over http errors (404, etc)
//then() can check the response.ok and/or repsonse.status properties