// Global and local scope

let a = 10
const b = 20
var c = 30

if(true){
    let a = 100
    console.log("Innner : ",a);
}

console.log(a);
console.log(b);
console.log(c);