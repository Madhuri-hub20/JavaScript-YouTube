
//example using filter and map functions
/*const myArr =[
    {
        name : "Madhuri",
        age : 23,
        salary : 2200
    },
    {
        name : "Bhushan",
        age : 27,
        salary : 2400
    },
    {
        name : "Wagh",
        age : 22,
        salary : 2000
    },
    {
        name : "Navale",
        age : 21,
        salary : 19
    },
    {
        name : "Tiger",
        age : 12,
        salary : 500
    },
    {
        name : "Page",
        age : 14,
        salary : 300
    }
]

const array = myArr.filter((num) => {
    if(num.age >= 10 && num.age <=20){
        return true;
    }else{
        return false;
    }

}).map((num) => {
    num.salary = num.salary + 1000; 
    return num;
})
console.log(array);*/


//example using flatMap function 

/*const myArr1 =[[1,2,3],4,5,[6,7]]

const arrayResult = myArr1.flatMap((num) => num).map(num => num + 10).filter(num => num > 12)
console.log(arrayResult);*/


//example using reduce function

const myArray = [1,2,3,4,5];
const newArray = myArray.reduce((acc , currVal) => acc + currVal, 0)
console.log(newArray);


//*******or****

const itemArray = [
    {
        itemName : "Madhuri",
        price : 1200
    },
    {
        itemName : "Bhushan",
        price : 2200
    },
    {
        itemName : "Wagh",
        price : 100
    },
    {
        itemName : "Navale",
        price : 200
    }
];

const newItemArray = itemArray.reduce((acc, item) => acc + item.price ,0);
console.log(newItemArray);