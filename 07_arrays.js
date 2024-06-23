const arr = [1,2,3,45.7,true,"Krishna"];
arr.push("Radha")       //pushes element at the end of array
console.log(arr)
arr.push("Maya");
console.log(arr)
arr.pop()
console.log(arr)

arr.unshift(0)
console.log(arr)
arr.shift();
console.log(arr)

console.log(arr.includes("Krishna"))
console.log(arr.indexOf("Krishna"))

const str = arr.join()

console.log(str)

const A = arr.slice(1,3)        //it doesnt manipulates the original array, but returns 1->3 (3 doesnt included)
console.log("original: "+arr);
console.log("A: "+A);
const B = arr.splice(1,3)       //it manipulates original array, return 1->3 included 3
console.log("original: "+arr);
console.log("B: "+B);

console.log(A.concat(B))

//spread
const newArr = [...A, ...B];
console.log("spread arrays "+newArr);

//handling of array like these:
const arr1 = [1,2,3,[3,4,6],[23,11,44,[8,3,2]],4,5];
const flatArr = arr1.flat(Infinity)
console.log("flatArr "+flatArr)

//conversion of other types into array
console.log(Array.isArray("Krishna"))       //false
console.log(Array.from("Krishna"))          //['K', 'r', 'i','s', 'h', 'n','a']
console.log(Array.from({name:"Krishna"}))       //returns empty array as it cannot be converted into array we need to mention what has to be converted into array keys or values?
let score1 = 1000
let score2 = 2000
let score3 = 3000
console.log(Array.of(score1,score2,score3))     //created array from variables




