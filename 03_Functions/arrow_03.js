//this
const user = {
    username : "Madhuri",
    price : 999,

    welcomeMessage : function(){
        console.log(` ${this.username} , Welcome to website `);
    }
}
user.welcomeMessage();

//arrow
//example for explicit
const addition = (num1, num2) => {
    return num1 + num2; //explicit
}
console.log(addition(2,3));

//example for implicit

const add = (num3, num4) => (num3 + num4)
console.log(add(5,5))