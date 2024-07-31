const name = "Madhuri";
const repoCount = 50;
console.log(`This is my name ${name} and my count is ${repoCount}`);

const gameName = new String('Madhuri-Navale')

console.log(gameName);
console.log(gameName[2]);
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('d'));
console.log(gameName.trim());//it remove spacce suppose if we declare name ="  mdh   "


const url = "https://goole.com/google@30local";
console.log(url.replace('@30' , '-' ))
console.log(url.includes('@'));
console.log(gameName.split('-'))
