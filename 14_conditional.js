//falsy values:  false, 0, -0 , BigInt 0n, "", null, undefined, NaN
//truthy values: true, "0", 'false', " ", [empty array], {empty object}, function(){}, 

//nullish coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10      //5
val1 = null ?? 5    //5
val1 = undefined ?? 34      //34
val1 = null ?? 10 ?? 20     //10

//ternery operator

let cond = val1 != 10 ? console.log("hllo") : console.log("bye");