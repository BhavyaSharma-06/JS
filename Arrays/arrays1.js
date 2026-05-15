// arrays
const myArr = [1,2,3,4];

//accessing them
console.log(myArr[0]); 

//some array methods
const arr = new Array(1,2,3,4,5,6);
console.log(arr.push(10)); // adds an element at the end of the list
console.log(arr);

console.log(arr.pop());
console.log(arr); // removes an element from the end of the list

console.log(arr.unshift(100));
console.log(arr); // adds an element at the starting of the list

console.log(arr.shift());
console.log(arr); //removes an element from the starting of the list

const newArr = arr.join(); // converts the array into strings
console.log(newArr);
console.log(typeof newArr);


// // SLICE AND SPLICE

// // 1. SLICE

const sliceArr = arr.slice(0,2); // first element inclusive last exclusive
console.log(sliceArr);
console.log(arr);  // returns orignal array

// // 2. SPLICE

const spliceArr = arr.splice(0,2); // first element inclusive last exclusive
console.log(spliceArr);
console.log(arr); // returns array - the values that we spliced [3,4,5,6]

/*  
splice() can do three things:

remove elements
add elements
replace elements

array.splice(start, deleteCount, item1, item2...)

*/

const spliArr = arr.splice(1,3,17);
console.log(arr);

// More methods - PUSH(Changes orignal array)

const names = [`Bhavi`, `Ansh`, `Bhavya`, `Aviral`];
const names2 = [`Ananya`, `Jatin`, `Khyati`];

names.push(names2);
console.log(names);

/* Notice the last item is another array inside it. This is called a nested array.
Not recommended if you want to add elements

CAN USE CONCAT OR MOST EFFECTIVE SPREAD OPERATOR */

// CONCAT (Creates new array)

const ans = names.concat(names2);
console.log(ans);

// SPREAD(Most EFFECTIVE can merge as many array as we want)

const allNames = [...names, ...names2];
console.log(allNames);

//FLAT 
/*The flat() method of Array instances creates a new array 
with all sub-array elements concatenated into it recursively
up to the specified depth.*/


const arr2 = [1, 2, [3, 4, [5, 6]]];
console.log(arr2.flat(Infinity));
// As by default it does only one level








 










