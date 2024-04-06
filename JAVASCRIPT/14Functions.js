function sayMyName (){
    console.log("S");
    console.log("U");
    console.log("N");
    console.log("A");
    console.log("I");
    console.log("N");
    console.log("A");
}
// if we write sayMyName it will be reference ...function will not execute
// sayMyName()

function AddTwoNumber(num1,num2){
    console.log(num1+num2); 
}
AddTwoNumber(2,5)
AddTwoNumber(1,"2")
AddTwoNumber(3,null)

function AddTwoNumber2(num1,num2){
    let result = num1+num2;
    return result;
}
const result = AddTwoNumber2(3,5)
console.log("Result: ",result);


function loginUserMsg(username = "sam"){ //predefining the name
    if(username === undefined){
        console.log("Please enter a username");
    }
    return `${username} just logged in`
}
// console.log(loginUserMsg("Sunaina"))
console.log(loginUserMsg());

// functions 2 video
/// ...spread operator and rest operator
function calculateCartPrice(...num1){ //rest operator
    return num1
}
console.log(calculateCartPrice(200,400,500,2000))

// function calculateCartPrice(val1,val2, ...num1){ //rest operator
//     return num1
// }
// console.log(calculateCartPrice(200,400,500,2000))


const user = {
    username: "sunaina",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

// object
handleObject({
    username:"sam",
    price: 399
})

// array
const myarr =[200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myarr));