// singleton
// object.create

// object literals
const mySym = Symbol("key1")

const JsUser = {
     name: "Sunaina",
     "full name":"Sunaina virdi",
     // mySym:"I am programmer", //it is not used as a symbol
     [mySym]:"I am a developer", //correct way of using a symbol
     age: 19,
     location: "Jaipur",
     email: "sunaina@google.com",
     isLoggedIn:false,
     lastLoginDays:["Monday","Saturday"]
}

console.log(JsUser.email); 
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(typeof JsUser[mySym]);
// console.log(typeof JsUser.mySym);

JsUser.email = "sunaina@yahoo.com"
// Object.freeze(JsUser) //if we change email again, the changes will not propogate 
JsUser.email = "sunaina@hotmail.com" //changes are not reflected because it's frozen
console.log(JsUser)

// Function
JsUser.greeting = function(){
     console.log("Hello JS user");
}

console.log(JsUser.greeting); //function execute nhi huya h bas function call huya h
console.log(JsUser.greeting());//function executed //(error)not created as function till now bcz the object was freezed

JsUser.greetingTwo = function(){
     // string interpulation
     console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greetingTwo());