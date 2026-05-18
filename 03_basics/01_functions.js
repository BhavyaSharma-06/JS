function sum(num1, num2){    //Here we pass parameters          
    console.log(num1 + num2); 
}

sum(2,3); // Here we pass arguments
/*Here the result came because we did console.log if we return then we have to store it
 in a variable then doing console.log at the time of function call*/

 //Using return statement

 function sum1(num1, num2){
    return num1 + num2
 }

 console.log(sum1(2,3));

 /*Anything written after return will not be executed as it is
 considered as the laat statement*/