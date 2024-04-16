const userEmail = "Sunaina@gmail.com";
if (userEmail) {
    console.log("Got user email");
}
else{
    console.log("Don't have user email");
}

// false values
// false, 0, -0, BigInt 0n, "", null, undefined,Nan(not a number)

// truthy values
// "0", "false", " ", [], {}, function(){}

// if(userEmail.length === 0){
//     console.log("Array is empty");
// }

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Empty object")
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 =5 ?? 10
// val1 = null ?? 10 
// val1  = "" ?? 15
// val1 = undefined ?? 15
// val1 = NaN ?? 20 
val1 = null ?? 10 ?? 20
console.log(val1);

// Terninary operator
// condition?true:false

const IceTeaPrice = 100
IceTeaPrice >= 80 ? console.log("less than 80"): console.log("more than 80"); ;