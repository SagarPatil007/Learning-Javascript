// Let, const and var ki kahani

const accountID = 144023
let accountEmail = "sagar@google.com"
var accountPassword = "12345"

accountCity = "pune"

accountEmail = "user@gmail.com"
accountPassword = "14530"

accountCity = "surat"

let accountState;

/*
    -> prefer use let instaed of var
    -> by deafult javascript declare the value variable undefined
*/

console.table([accountID,accountEmail,accountPassword,accountCity,accountState]);

/*  output:
┌─────────┬──────────────────┐
│ (index) │      Values      │
├─────────┼──────────────────┤
│    0    │      144023      │
│    1    │ 'user@gmail.com' │
│    2    │     '14530'      │
│    3    │     'surat'      │
│    4    │    undefined     │
└─────────┴──────────────────┘
*/