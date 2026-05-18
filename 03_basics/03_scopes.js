// Global and local scopes 

function one(){
    const username = `Bhavi`;
    function two(){
        const website = `Youtube`;
        console.log(username);   
    }
    //console.log(website); can't access because out of scope
    two();
}
one();

// HOISTING - How to write what basically rules


console.log(plusOne(2));
function plusOne(num1){
 return num1 + 1;
}


// console.log(result(2)); // error as can't declare like this have to declare after function
const result = function plusTwo(num1){
    return num1 + 2;
}
console.log(result(2)); correct approach

