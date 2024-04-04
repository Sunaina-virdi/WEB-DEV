const name = "sunaina"
const repoCount = 50
// console.log(name + repoCount + " value");

// use this method
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('sunaina-virdi-53')

// methods
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2)); //index 
console.log(gameName.indexOf('a')); //char
console.log(gameName);
console.log(gameName.split('-')); 

const newString = gameName.substring(3,6) //we can'nt give negative values here if we did ,it will ignore and start from 0 index
console.log(newString);

const anotherString = gameName.slice(-7,3)
console.log(anotherString);

const newStringOne = "      sunaina    "
console.log(newStringOne);
console.log(newStringOne.trim()); 


const url ="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'));
console.log(url.includes('suan')) // true or false

