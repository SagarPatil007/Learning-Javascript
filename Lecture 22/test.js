// Hoisting 

console.log(addOne(5,3));
function addOne (n1,n2){
    return n1 + n2
}

// console.log(addTwo(8,2));  //Error not found intialization

const addTwo = function(n1,n2){
    return n1 + n2
}
