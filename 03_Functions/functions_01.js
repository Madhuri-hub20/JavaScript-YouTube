function myFun(){
    console.log("M");
    console.log("a");
    console.log("d");
    console.log("h");
    console.log("u");
    console.log("r");
    console.log("i");
}
myFun();//myFun called reference () called execution
//first wya
function addNumber(number1, number2){
    console.log(number1 + number2)
}
addNumber(2 , 4);

//secoond way

function addNumber(number1, number2){
    return number1 + number2
}
const result = addNumber(2 , 4);
console.log("Result is : ", result);

function loginUserMessage(username){
    return `${username} just loggedIn`;
}
console.log(loginUserMessage("mdh"))//return mdh just loggedIn
console.log(loginUserMessage());//it will return undefined just loggedIn

function calculateCartPrice(val1,val2,...num1){ //here we suing rest operator(...) it will collect multipe element into array
    return num1;
}
console.log(calculateCartPrice(100,200,300,400));

const user = {
   userName : "Bhushan",
   price : 1200
}

function handleObject(anyObject){
    console.log(`User Name is : ${anyObject.userName} and Price is : ${anyObject.price} `);
}
handleObject(user);
handleObject({
    userName  : "wagh",
    price  : 333
})
