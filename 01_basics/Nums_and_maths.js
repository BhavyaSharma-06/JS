const score = 100;
// console.log(score);

const value = new Number(100)
// console.log(value);

// console.log(value.toString());
// console.log(value.toFixed(2));   // 100.00

const num = 123.83;
// console.log(num.toPrecision(3));

const hundreds = 10000000
// console.log(hundreds.toLocaleString(`en-IN`));  // 1,00,00,000 to indian format en-IN


// Maths Operations

// console.log(Math);
// console.log(Math.abs(-5));
// console.log(Math.round(4.6));
// console.log(Math.floor(4.9)); //takes lower values = 4
// console.log(Math.ceil(4.7)); //takes upper values = 5


console.log(Math.random()); //the value will always come between 0 and 1
// suppose we want values from 1 to 10 Then

console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);










