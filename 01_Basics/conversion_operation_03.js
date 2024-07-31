
let score = "33abc";

console.log(typeof score);
console.log(typeof (score));

let scoreInfo = Number(score);
console.log(typeof scoreInfo);
console.log(scoreInfo)

//"33" => 33
// "3abc" => if we assigned value to variable and converting a number funtion return as a NaN(not a number)
// true => 1; false => 0

let isLoggedIn = 1; //1 means true and 0 means false
let booleanInfo = Boolean(isLoggedIn);
console.log(booleanInfo);//if we pass blank value it will show false

////1 => true and 0 => false
//"" ==> false
//"mdh" => true

let someNumber =33;
let stringSome = String(someNumber);
console.log(stringSome);
console.log(typeof stringSome)