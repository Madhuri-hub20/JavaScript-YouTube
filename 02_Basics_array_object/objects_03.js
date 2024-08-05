//signleton
//object Literals

const mySymbol = Symbol("myKey");

const myObj = {
    name : "Madhuri",
    age : 24,
    [mySymbol] : "key",
    location : "Pune",
    email : "mdh202@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", " Saturday"] 
}

console.log(myObj);
console.log(myObj[mySymbol]);
console.log(mySymbol)