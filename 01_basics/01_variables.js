// Prefer not to use var 
// because of issue in block and function scope.


const accountId= 144553 
let accountEmail= "aagam@gmail.com"
var accountPassword= "12345"
accountCity= "Jaipur"
let accountState;
//accountId= 1

accountEmail="aa@gmail.com"
accountPassword= "12333"
accountCity= "Delhi"

//console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
