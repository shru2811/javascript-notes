const accId = 3716399;
let pswd = "1342";
var acCName = "ACBDA";
city = "Lucknow";

// accId = 3435555;
// cannot change the value of the const variable
// console.log(accId); >> raise an error

pswd = "43231";
accName = "Shruti";     //var causes scope issues
city = "Delhi";         //bad practice of defining a variable 

console.table([pswd, accName, city]);