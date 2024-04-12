// Immediately Invoked function Expression(IIFE)
// global cope k pollution ko htana k ly hmane iife ka use kiya

// syntax of iife
(function chai(){
    // names iife
    console.log(`DB CONNECTED`);
})(); //semi colon nesscary when we have to declare 2 iife

// arrow function
// simple iife (unnamed)
// parameter passed  in brackets, body is inside curly braces
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('sunaina')
