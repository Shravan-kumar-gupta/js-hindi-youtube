const accountId = 144553;
let accountEmail =  "shravan@gmail.com";
var accountPassword = "12345";
accountCity = "jaipur";

// accountId = 2;
accountEmail = "sk@gmail.com"
accountPassword = "212121"
accountCity = "bangluru";
let accountState;  // undefined
// console.log(accountId);
// console.log(accountEmail);

/*
  Prefer not to use var
  bacause of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
