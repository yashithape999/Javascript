const accountId = 12345
let accountEmail = "yashithape@gmail.com"
var accountPass = "555666"
accountcity = "Pune"

//accountId = 6789 //Not Allowed
accountEmail = "xyz@gmail.com"
accountPass = "333444"
accountcity = "Bengluru"

/*
Prefer not to use var because of issue
in block scope and functional scope 
*/

console.log(accountId);
console.table([accountId,accountEmail,accountPass,accountcity])