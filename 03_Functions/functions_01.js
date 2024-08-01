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
console.log(loginUserMessage("mdh"))
console.log(loginUserMessage());