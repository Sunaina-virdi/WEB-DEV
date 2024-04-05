// DATES
let myDate = new Date()
console.log(myDate.toString()); //day date time 
console.log(myDate.toDateString()); //day and date
console.log(myDate.toLocaleString()); //date and time both
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(typeof myDate);

let myCreatedDate = new Date(2024,0,20) //array h toh index 0 se start hogi
console.log(myCreatedDate);

let myCreatedDate2 = new Date(2024,0,20,5,3)
console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("2023-01-14") //string h toh index 1 se hi start hogi
console.log(myCreatedDate3.toLocaleString());

let myTimeStamp = Date.now()
// we can compare through this timestamp method
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000)); //convert it into smaller value

let newDate = new Date();
console.log(newDate.getFullYear());
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time'

// newDate.toLocaleString('default',{
//     weekday:"long",
//     dateStyle:'full'
// })