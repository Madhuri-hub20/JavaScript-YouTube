const accountId  = 11234 ;
let accountEmail = "mdh@google.com" ;
var accountPassword = "98765" ;
accountCity ="Pune" ;
let accountState ;

// accountId = 2 ; //not allowed
/* Prefer not to use Var bocz of issue in block scope and functional scope */

accountEmail = "fc@mail.com";
accountPassword = "232323";
accountCity = "Mumbai";

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])