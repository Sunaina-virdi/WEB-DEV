const score = 400;
console.log(score);
const balance = new Number(100)
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3));

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));


/************************MATHS*******************/
console.log("MATHS");
console.log(Math);  // returns the Math object

console.log(Math.abs(-4));
console.log(Math.ceil(12.3));     // rounds up to nearest integer above
console.log(Math.floor(12.7));    // rounds down to nearest integer below
console.log(Math.round(12.4));   // rounds to nearest integer, no rounding if exactly halfway
console.log(Math.sqrt(16));      // square root of a number
console.log(Math.min(4,3,6,8));
console.log(Math.max(4,3,6,8));

console.log(Math.random(0,1));       // generates random decimal between 0 and 1 (not inclusive of 1)
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min =10;
const max =20;
console.log(Math.floor(Math.random()*(max-min+1))+min)
const range = max - min;
console.log(range);
 