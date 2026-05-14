// Dates

let myDate = new Date(); // By writing this way you can use any method with it
// new date object created and myDate is an instance of it
console.table([ 
    myDate.toString(), 
    myDate.toDateString() , 
    myDate.toISOString() , 
    myDate.toJSON() , 
    myDate.toLocaleDateString() , 
    myDate.toLocaleString()
]);

console.log(typeof myDate);

let newDate = new Date(2023,0,1, 5, 3)
console.log(newDate.toDateString());
console.log(newDate.toLocaleString());
console.log(newDate.toLocaleDateString());



