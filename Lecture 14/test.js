// Arrays

const myArray = [0,1,2,3,4,5]
// console.log(myArray);


const arr = [0,1,2,"sagar",true];
// console.log(arr);

const myHeroes = new Array("Captain","IronMan")
// console.log(myHeroes);

// Array Methods

myArray.push(6);

myArray.shift();
myArray.unshift(9);

// console.log(myArray.includes(9));

// console.log(myArray.indexOf(3));

const newArray = myArray.join()

// console.log(typeof newArray);
// console.log(typeof myArray);

// slice , splice

console.log("a",myArray);

const myn1 = myArray.slice(1,3);
console.log(myn1);

console.log("b",myArray);

const myn2 = myArray.splice(1,3);
console.log("c",myArray);
console.log(myn2);
