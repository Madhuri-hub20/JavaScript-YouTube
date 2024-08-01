
const regularUser ={
    email : "mdh23@gmail.com",
    fullName : {
        userFullName : {
            name : "Madhuri",
            LastName : "Navale"
        }
    }
}
console.log(regularUser.fullName1?.userFullName)//getting undefine if we not sur about path(optional chaining)
console.log(regularUser.fullName.userFullName)


const obj1 = {1 : "a", 2 : "b" }
const obj2 = {3 : "a", 4 : "b"}
const obj3 = {5 : "a", 6 : "b"}

const obj4 = Object.assign({},obj1,obj2);
const obj5 ={...obj1, ...obj2}
console.log(obj4); 
console.log(obj5)

const users =[
    {
        name : "mdh",
        age : 12
    },
    {
        name : "mdh",
        age : 12
    },
    {
        name : "mdh",
        age : 12
    },
    {
        name : "mdh",
        age : 12
    }
]
users[1].name;
console.log(regularUser);
console.log(Object.keys(regularUser))
console.log(Object.values(regularUser))
console.log(Object.entries(regularUser))


const course ={
    email : "abc@gmail.com",
    courseName : "Angular",
    days : 45
}

const {courseName} = course
console.log(courseName)

//json object 
/*{
    "name" : "Madhuri",
    "lastname" : "wagh"
}

//json Array

[
    {
        "name" :"Madhuri"
    },
    {
        "last"  : "Wagh"
    }
]*/