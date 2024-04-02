const accountId = "253699"
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
// var const or let k bina bhi variable declare ho skat h lekin krna nhi chy 
accountcity = "Jaipur"
let accountState //undefined
 
// accountId = 2 not allowed bcz const variable cannot be changed

accountEmail = "hc@ch.com"
accountPassword="212121"
accountCity = "Bengaluru"

console.log(accountId);

/* 
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountEmail,accountId,accountPassword,accountState]);