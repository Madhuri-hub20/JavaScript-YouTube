//  Priitive datatype 
// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

//Non Primitive (Reference)

//Array, Object, Functions

/*JavaScript is Dynamic type language
JavaScript is a dynamic language and not static, which means that variables can hold values of different types 
during runtime.*/


const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId);

//Array Declartion 

const heros = ["Bhushan", "Madhuri", "Wagh"];
console.log(heros)

//Object declartion

const myObj ={
    name : "mdh",
    age : 23,
    city : "Pune"
};
console.log(myObj);

//Function declartion 

const myFunction = function(){
    console.log("Hello Bhushan");
}
myFunction();

