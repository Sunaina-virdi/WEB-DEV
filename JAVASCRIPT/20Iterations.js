// for loop
for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 5){
        console.log("5 is best number");
    }
    console.log(element);
} 

for (let i = 0; i <= 10; i++) {
    console.log(`outer loop value: ${i}`);
    for (let j=0;j<=10;j++) {
        //  console.log(`inner loop value ${j} and inner loop${i}`);
        // console.log(i+'*' + j+' = ' + i*j);
    }
}

let myArray = ["flash", "batman","superman"]

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
    
}

// break and continue
for (let i = 0; i <= 20; i++) {
    if(i == 5){
        console.log(`Detected 5`);
        // break;
        continue;
    }
    // console.log(`value of i is ${i}`);
    
}


//WHILE LOOP

let index= 0
while (index <= 10) {
    console.log(`value of index is ${index}`);
    index = index+2;
}

let myNewArr = ['flash' ,'batman','superman']

let i = 0
while (i < myNewArr.length) {
    console.log(`Value is ${myNewArr[i]}`);
    i++;
}


// DO WHILE LOOP

let score = 1
do{
    console.log(`Score is ${score}`);
    score++;
}while(score<=10)


//   FOR OF LOOP ->values hi aati h by default

// ["","",""]
// [{},{},{}]
const arr = [1,2,3,4,5]
for (const i of arr) {
    console.log(i);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    if(greet === " "){
        continue;
    }
    console.log(`each char is ${greet}`);
}

// MAPS ->map objects are collections of key-value pairs (all unique values)
const map = new Map()
map.set('IN','India')
map.set('USA','Unites States of America')
map.set('ON','Canada')
map.set('Fr','France')
map.set('IN','India')


console.log(map);
for (const [key,value] of map) {
    console.log(key,'=>',value);
}


const myObj ={
    'Game1' : 'cricket',
    'Game2' : 'football'
}
// yh kaam nhi krega
// for (const [key,value] of myObj) { //myObj is not iterable
//     console.log(key,"=>",value);
// }

const MyObjects = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'

}
// FOR IN LOOP ->keys aate h by default
// works here
// for (const key in MyObjects) {
//     console.log(`${key} shortcut is for ${MyObjects[key]} `);
// }

const programming =['js','rb','py','java','cpp']

// for(const key in programming){
//     console.log(programming[key]);
// }


// FOR EACH LOOP
const coding = ["js","ruby","java","python","cpp"]
// coding.forEach( function(item){
//     console.log(item);
// })

// arrow function
coding.forEach((item,index,arr) =>{
    console.log(item,index,arr);
})

// imp
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js" 
    },
    {
        languageName: "python",
        languageFileName: "py" 
    },
    {
        languageName: "java",
        languageFileName: "java" 
    },
]

myCoding.forEach((item)=>{
    console.log(`Language name: ${item.languageName}`);
})