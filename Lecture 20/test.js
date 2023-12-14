// function with objects and array

// rest opeartor
function calculateCartPrice(...num1){
    return num1;
}

// console.log(calculateCartPrice(2,3,4,5,1));

const user = {
    userName : "Sagar",
    price : 220
}

function handleObject(anyObj){
    console.log(`Username is ${anyObj.userName} and price is ${anyObj.price}`)
}

handleObject(user)

const myArray = [100,200,300,400]

function secondValue(arr){
    return arr[2]
}

console.log(secondValue(myArray));  