// both declartion is same , you can declare both ways
const tinderUser = new Object() //singleton object 
// const tinderUser = {} //non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

// object in object in object (nested objects)
const regularUser = {
    email: "som@gmail.com",
    fullname: {
        userfullname:{
            firstName:"John",
            lastName:"Doe"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstName);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

// const obj3 = {obj1,obj2}  //it will give as object in object 
// object.assign() -> method to merge two or more objects into one
// const obj3 = Object.assign({},obj1,obj2) //correct method
const obj3 = {...obj1,...obj2} //we use this syntax 90%
// console.log(obj3);

const users = [
    {
        id:1,
        email: "s@gmail.com"
    },{
        id:2,
        email: "r@yahoo.com"
    },{
        id:3,
        email: "j@hotmail.com"
    },
]

users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// to check whether the property is present or not
// console.log(tinderUser.hasOwnProperty('isLoggedOut')); 




// object destructures

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}
// course.courseInstructor
const {courseInstructor: instructor} = course //now by using instructor we can call courseinstructor

// console.log(courseInstructor);
console.log(instructor);


// JSON API
// {
    
//     "name": "sunaina";
//     "coursename": "Js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]