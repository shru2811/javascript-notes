let myDate = new Date()             //object
console.log(myDate.toString())      //Wed Jun 19 2024 13:50:29 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleString())        //19/6/2024, 1:50:29 pm
console.log(myDate.toDateString())          //Wed Jun 19 2024

let myCreatedDate = new Date(2023, 9, 20)       //my created date
let myCreatedDate2 = new Date(2023, 9, 20,5,3)       //my created date
let myCreatedDate3 = new Date(2023, 9, 20,22,3)       //my created date
let myCreatedDate4 = new Date("2023-10-21")       //my created date yyyy/mm/dd
let myCreatedDate5 = new Date("10-20-2023")       //my created date mm//dd/yyyy



console.log(myCreatedDate.toDateString())       //month starts from 0
console.log(myCreatedDate2.toLocaleString())      //20/10/2023, 5:03:00 am
console.log(myCreatedDate3.toLocaleString())      //20/10/2023, 10:03:00 pm
console.log(myCreatedDate4.toDateString())          //Sat Oct 21 2023
console.log(myCreatedDate5.toDateString())          //Fri Oct 20 2023


