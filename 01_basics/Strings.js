// Basic String

let name = "Bhavya";
const marks = 90;

// console.log(`Hey my name is ${name} and my marks are ${marks}`);

// Way of writing string through which we can perform many operations

const gameName = new String(`Bhavya-ansh-bhavi`);

console.log(gameName[0]);
console.log(gameName.substring(0,5));
console.log(gameName.slice(-6,3));

/* Both substring and slice are used to extract values
 but slice allows negative whereas substring does not.*/

 console.log(gameName.split(`-`)); //splits by given value [`Bhavya`, `ansh`, `bhavi`]
 console.log(gameName.trim()); // removes extra space from start and end
 console.log(gameName.charAt(4)); // return character at a given index
 console.log(gameName.indexOf(`a`)); // returns index of a character
 console.log(gameName.replace(`Bhavya`, `Bhavi`));
 console.log(gameName.includes(`Bhavya`)); // and many more refer mdn
 
 
 
 

 




