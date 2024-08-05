const myNum = [1,2,3,4,5,6,7,8,9,10]
const numbers =[]

myNum.forEach((num) => {
    if(num > 4) {
        numbers.push(num);
    }
})
console.log(numbers);