const desc = Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(desc);


// console.log(Math.PI);
// Math.PI =  5
// console.log(Math.PI);

// const myNewObj = new Object(null)

const chai = {
    name : "ginger chai",
    price : 250,
    isAvaiable : true,
    isGood : true,

    OrderChai : function(){
        console.log("code not worked");
    }
}

// console.log(chai);                                                                                                                                                                                                                                               

// console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai , "name" ,{
    enumerable : true,
})              

// console.log(Object.getOwnPropertyDescriptor(chai,"name"));


/* checking object properties and check is iterable or not means enumerable or not */

for (let [key , value] of Object.entries(chai)) {

    if(typeof value != 'function'){
        console.log(`${key} : ${value}`);
    }
}