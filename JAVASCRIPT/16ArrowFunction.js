// this -> keyword

const user = 
{
    username: "sunaina",
    price: 999,

    welcomeMessage: function(){
        console.log(`Welcome ${this.username}! Your current balance is $${this.price}.`);
        console.log(this);
    }
}

user.welcomeMessage()
user.username="john"
user.welcomeMessage()

console.log(this); //{}empty object


//  Arrow functions 
function chai() {
    let username = "sunaina"
    console.log(this);
}

// chai()


const coffee = () => {
    let username = "sunaina"
    console.log(this.username);
}
coffee() //undefined

// 3 methods

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

// const addTwo = (num1,num2) => num1 + num2

// const addTwo = (num1,num2) => (num1 + num2)

const addTwo = (num1,num2) => ({username:"sunaina"}) //curly brackets are imp outside  of them

console.log(addTwo(3,4));

// const myArray = [2,5,3,7,8]
// myArray.forEach(() => {

// })
// myArray.forEach(() => (

// ))