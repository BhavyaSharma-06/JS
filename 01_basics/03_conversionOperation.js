let score = undefined;
console.log(typeof score);
let convTonum = Number(score);
console.log(typeof convTonum );
console.log(convTonum);

/* Case study convert into number
"33" = 33
"33abc" = NaN
true = 1
false = 0
*/

let isLoggedIn = 1;
console.log(typeof isLoggedIn);
let convTobool = Boolean(isLoggedIn);
console.log(typeof convTobool)
console.log(convTobool);

/* Case study convert into boolean
1 = true
0 = false
"" = false
"abc" = true
*/

let hinumber = 33;
console.log(typeof hinumber)
let convTostring = String(hinumber)
console.log(typeof convTostring )
console.log(convTostring);

/* Case study convert into string
33 = "33"
*/

/*  Some checks */
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

/* The reason is that an equality check == and comparisons >, <, >=, <= works differently
Comparisons converts null to a number , treating it as 0. That is why >= gives true and >
returns false.
SHOULD NOT USE IT NOT A GOOD PRACTICE
*/

/* Strict operator === it checks datatypes also here*/
console.log("2" === 2); //returna false nut,
console.log("2" == 2); // return true as it converts "2" to number








