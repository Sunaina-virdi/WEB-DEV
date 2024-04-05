const marvel_heros = ['thor','spiderman','ironman']
const dc_heros = ['superman','flash','batman']

// marvel_heros.push(dc_heros) //it creates array in array
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const all_heros= marvel_heros.concat(dc_heros)
console.log(all_heros);

const new_heros = [...marvel_heros, ...dc_heros] //same outout as concat but used now than concat
console.log(new_heros); 

const another_arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_arr = another_arr.flat(Infinity)
console.log(real_another_arr);

console.log(Array.isArray("Sunaina")) //false because is a string not an array
console.log(Array.from("Sunaina"));

// interesing case
console.log(Array.from({name: "sunaina"})); //apko btana pdhega phle ki keys ka array bnana h ki value 
// agr vo na bna paya toh empty array return kr dega 


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)); //.of ->Returns a new array from a set of elements.