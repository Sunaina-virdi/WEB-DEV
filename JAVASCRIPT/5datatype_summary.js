/*
JAVASCRIPT IS A DYNAMICALLY TYPED LANGUAGE
typeof 
string ->string
undefined ->undefined
null ->object
number ->number
boolean ->boolean
symbol ->symol
bigint ->bigint

array ->object
object ->object
function ->functionobject

PRIMITIVE (7 TYPES)
String 
Number
Boolean
Null
Undefined
Symbol(ECMAScript6)
BigInt
*/


/// ...spread operator and rest operator


const score =100; // Number
const scorevalue = 100.3 //number
const isLoggedIn = false
const outsideTemp = null //object
let userEmail //undefined

const id =  Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


const bigNumber = 35689862359558662623n
console.log(bigNumber); 


/*
Refernce (NON-PRIMITIVE)
Array
Objects
Functions
*/


const heros =["shaktiman","naagraj","doga"];
let myObj= {
    // objects
    name: " sunaina",
    age : 18,
}

// functions
const myfunction = function(){
    console.log("hello world!");
}

console.log(typeof outsideTemp);
console.log(typeof myfunction); //functionobject