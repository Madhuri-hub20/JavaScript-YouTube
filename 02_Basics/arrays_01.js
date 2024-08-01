//Array 

const myArr = [1, 2, 3, 4, 5];
const myArr2 = ["mdh", "bmw", "wagh"];
const myArr3 = new Array(1, 2, 3, 4, 5);
console.log(myArr[2]);

myArr.push(6);
//myArr.pop();
//myArr.unshift(7);
console.log(myArr);
console.log(myArr.includes(9));//this is checking value is present on array or not
console.log(myArr.indexOf(3));

//slice and splice
console.log("A", myArr)

const newArr1 = myArr.slice(1, 3);//now removring other element it should diaplay onindex element 
//eg if we set index 1, 3 it will display nly index 1 and 2 . 3 indext not displying
console.log(newArr1);

console.log("B", myArr);
const newArr2 = myArr.splice(1, 3);//remove the provide index element start to end index element 
//eg if we set the 1 ,3 it will deleted index 1,2,3 remaning array should display as it is
console.log(newArr2);

console.log("c", myArr)