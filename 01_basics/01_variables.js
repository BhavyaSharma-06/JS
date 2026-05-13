// const and let and normal value declarration

const accountID = 1234;
let accountEmail = "bhavi@123";
var accountPassword = "bhavi123";
accountCity = "Himachal";
let accountState; // will come undefined as no value is assigned in it

/* var is not used now because of issue in block and functional scope */

accountEmail = "ansh@0706";
accountCity = "Bengluru"; // not prefereed more with declarration of anything like let, const etc..

console.table([accountID, accountEmail, accountPassword, accountCity, accountState]);