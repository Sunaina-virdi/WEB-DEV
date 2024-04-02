let score = "33abc";
/* if score = null (
    object object number 0
)
if score = defined(
    undefined undefined number NaN
)
if score = true(
    boolean boolean number 1
)
if score = "sunaina"(
    string string number NaN
)
*/

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)

console.log(typeof valueInNumber); 
console.log(valueInNumber); //33abc is not apur number NaN


// "33" => 33 
// "33abc" =>NaN (not a number)
// "true" => 1;false=>0

let isLoggedIn = "hite";
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); //true->1 / false->0 / ""->false / "sunaina"->true

let someNumber =33;
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);



/****************operation********************/

let value = 3;
let negValue = -value;
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/2);
console.log(2%2);

let str1 = "hello";
let str2 = "hitesh";
let str3 = str1+str2;
console.log(str3);

console.log("1"+2);
console.log("1"+2+"2");
console.log("1"+2+2);
console.log(1+2+"2"+(4+5));

console.log(+true);
console.log(+false);
console.log(+"");

let num1,num2,num3

num1 = num2 =  num3 = 2+2

let gameCounter = 100
gameCounter++
console.log(gameCounter);