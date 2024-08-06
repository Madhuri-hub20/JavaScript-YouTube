
Array.prototype.extraProperty = "madhuri"
const myArray = [1,2,3,4,5]
for(let arr in myArray){
    if(myArray.hasOwnProperty(arr)){
    console.log(arr);
    }
}