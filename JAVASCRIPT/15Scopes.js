let a =300
if(true){
    // local or block scope
    let a =10
    const b=20
    var c=30
    console.log("INNER: ",a);
}

console.log(a)
// console.log(b)
// console.log(c)


function one(){
    const username = "sunaina"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    two()
}
one()


if (true) {
    const username = "sunaina"
    if(username === "sunaina"){
        const website =" youtube"
        console.log(username+website);
    }

}


// ++++++++++++++++interesting+++++++++++++++++

console.log(addOne(5));
function addOne(num){
    return num+1
}
// addOne(5)


const addTwo = function(num){
    return num + 2  
}
addTwo(6)
