// FILTER => Returns the elements of an array that meet the condition specified in a callback function.

const Mynums = [1,2,3,4,5,6,7,8,9,10]
const newNums = Mynums.filter((num) => num > 4 )

// ANOTHER WAY
// const newNums = Mynums.filter((num) => {
    // return num>4 //return is imp
// } )

// if we want to use for each loop
const otherNums = []
Mynums.forEach((num) => {
    if(num>4){
        otherNums.push(num)
    }
})
// console.log(newNums);

const books = [

    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
    
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
    
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014},
    
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996},
  
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016},

    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989},
];

let userBooks = books.filter((bk) => bk.genre=== 'History')
// console.log(userBooks);
userBooks = books.filter((bk) => {
    return bk.publish >= 1995 && bk.genre === 'Science'})
// console.log(userBooks);




// MAP => Calls a defined callback function on each element of an array, and returns an array that contains the results.
const MyNumbers = [1,2,3,4,5,6,7,8,9,10]
const newNumbers = MyNumbers.map( (num) => num + 10)
console.log(newNumbers);   

// for each loop
// MyNumbers.forEach((num,index,arr)=>{
//     arr[index]=num+10
// })
// console.log(MyNumbers);  


// CHAINING  METHODS EXAMPLE

const Num = MyNumbers
        .map((num) => num*10) //eske ans k baad jo bhi array aayega uspe next map lag rha hoga
        .map((num) => num+1)
        .filter((num) => num>= 40)

console.log(Num);


// REDUCE => Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result,
//  and is provided as an argument in the next call to the callback function.

const digits = [1,2,3]

const Mytotal = digits.reduce(function(acc,currval){
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval;
},3)

// arrow function m same code
// const Mytotal = digits.reduce((acc,currval) => acc+currval,0)

console.log(Mytotal);

const ShoppingCard = [
    {
        itemname: "Js course",
        price: 2999
    },
    {
        itemname: "Cpp course",
        price: 4999
    },
    {
        itemname: "Java course",
        price: 7999
    },
    {
        itemname: "Web Dev course",
        price: 1299
    },
    {
        itemname: "DSA course",
        price: 9999
    },
]
const priceToPay = ShoppingCard.reduce((acc,item) => acc+item.price,0)

console.log(priceToPay);