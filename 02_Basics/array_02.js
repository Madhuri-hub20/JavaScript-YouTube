const f_name = ["Madhuri", "Bhushan", "Kajal"];
const surName = ["Wagh", "Navale", "Dhole"];

//f_name.push(surName);//merging array 
//console.log(f_name);//it return both array index value 
//console.log(f_name[3][1]);//it return 3 index on 1 value means here 3 la wagh value aahe n mg tyachi 1 index Navale

//concat

const names = f_name.concat(surName);//it will return all values in one array
//console.log(names);

const allNames = [...f_name, ...surName];
console.log(allNames);

console.log(Array.isArray("Madhuri"));
console.log(Array.from("Madhuri"));
console.log(Array.isArray({name : "Madhuri"}));//we need to mention from we need to create array key or value

const score1 = 100;
const score2 = 200;
const score3 = 300;
console.log(Array.of(score1,score2,score3));