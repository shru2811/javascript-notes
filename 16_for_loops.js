//forEach

let arr = [1,2,4,45,2,14,3]
//1st way
arr.forEach((item) => {
    console.log(item)
});

//2nd way
function prints(item){
    console.log(item)
}

arr.forEach(prints)

//3rd way
arr.forEach(function (item){
    console.log(item)
})

arr.forEach(function (index, ele,arr){      //(elements of array, index number, array )
    console.log(`${ele}  ${index}  ${arr}`)
})

//forEach returns undefined value

//filter

let newNums = arr.filter( (nums)=> nums>10 );     //filter is used to filter out the elements based on condition
console.log(newNums)

newNums = arr.filter((nums)=>{
    return nums>5
})

console.log(newNums)

//map is used to do any operation on all the elements of array

let m = arr.map( (num)=> {
    return (num+10)/2
})
console.log(m)

//chaining
console.log(arr)
m = arr.filter((num)=> num>8).map((num)=> num-2);
console.log(m)

//reduce -> used to reduce the elements into single value 
const dsaSheet = [
    {name:"Arrays", completed:1},
    {name:"LinkedLists", completed:1},
    {name:"Bit manipulation", completed:0},
    {name:"Stacks", completed:1},
    {name:"Queues", completed:1},
    {name:"Greedy Alogrithm", completed:0},
    {name:"Dynamic programming", completed:0},
    {name:"Graphs", completed:0},
    {name:"Trees", completed:0},
    {name:"Binary Trees", completed:0},
    {name:"Tries", completed:0},
    {name:"Strings", completed:0},
]
let progress = dsaSheet.reduce((acc,item)=>{
    return (acc + item.completed)
},0);
progress = (progress*100)/dsaSheet.length
console.log(`Your progress: ${progress.toFixed(2)}`)