const map = new Map()
map.set("hello", "world");
console.log(map)

for(const [key,value] of map){
    console.log(key, ":-", value);
}

let arr = [1,2,4,5,3,5]
for(const num of arr){
    console.log(num)
}

let obj = {
    name:"Shruti",       //obj is not itterable
    course:"BTech",
}

// for(const ele of obj){
//     console.log(ele)
// }

for(const key in obj){
    console.log(`${key} : ${obj[key]}`)
}
for(const key in arr){
    console.log(`${key} : ${arr[key]}`)

}