// arrays
// resizable and contain a mix  of data types, such as numbers, strings, objects, etc.

const myArr = [0,1,2,3,4,5]
console.log(myArr[0]);

const myHeros = ['Shaktiman','marvels','thor']
const myArr2 = new Array(1,2,3,4)

// Array methods
// myArr.push(6) //add element at last position
// myArr.push(7)
// myArr.pop() //remove element from last position

myArr.unshift(9) //add elements at starting index
myArr.shift() //remove element from the start
console.log(myArr)

console.log(myArr.includes(9)); //checks if the element is present in the array
console.log(myArr.indexOf(9)); //returns the index of the element

const newArr = myArr.join();
console.log(myArr);
console.log(typeof newArr); //convert to string

// slice,splice
console.log("A",myArr);

const myn1 = myArr.slice(1,3) //last range was not included
console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3) //last range was included  and and it remove splice index in original array
console.log("C",myArr);
console.log(myn2);