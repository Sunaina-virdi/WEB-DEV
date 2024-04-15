// *******************IF conditions********************

// <,>,>=.<=,==,!=.===
if(2 == "2"){
    console.log("executed");
}

// block scope(error aayega code m bcz power if k baare nhi h)

// const score = 200
// if(score > 100){
//     let power = "fly"
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`);

// shorthand notation

const balance = 1000
if(balance>500) console.log("test"); //implicit scope
console.log("test2");

if (balance < 500) {
    console.log("less than 500");
}
else if(balance < 750){
    console.log("less than 750");
}
else if(balance < 900){
    console.log("less than 900");
}
else{
    console.log("less than 1200");
}

const isUserloggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (isUserloggedIn && debitCard) {
    console.log("Allow to buy course");
} 

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}

console.log("SWITCH");
// *******************SWITCH STATEMENTS****************
 
const month = 3

// shift+alt+down arrow for copying the code
switch (month) {
    case 1:
        console.log("This is January");
        break;
    case 2:
        console.log( "This is February" );
        break;
    case 3:
        console.log( "This is March" );
        break;
    case 4:
        console.log( "This is April" );
        break;
    
    default:
        break;
}