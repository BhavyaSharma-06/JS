/* Now eg. we have tobuild a shopping cart and in that values can come infinite
means we have no idea of how much values will come so in that case we will
use spread operator so that we can get values in an array */

// Using ... spread operator return values as an array and then we can simple add them 

function calculateCart(...num1){
    return num1
}
console.log(calculateCart(200, 400, 6000, 700));

//Way of getting only limited values we want

function calculateCart1(val1, val2,...num1){
    return num1;
}
console.log(calculateCart1(200, 300, 400, 500, 1000)); //val1 removes 1st value and so on
//output [400,500,1000] as first 2 values are removed


//Passing object in a function

const user = {
    name : `Bhavi`,
    age : 20,
    education : `B.Tech`
}

function handleObject(anyObject){
    return `The name is ${user.name} and the age is ${user.age}`
}

console.log(handleObject(user));

//Another way of doing the same
console.log(handleObject({
    name : `Bhavi`,
    age : 20,
}))

//Passing Array in a function

const newArray = [200, 300, 400, 600, 1000]

function handleArray(getArray){
    return getArray[1];
}

console.log(handleArray(newArray));

//Another way of doing the same
console.log(handleArray([200, 300, 400, 600, 1000]))










