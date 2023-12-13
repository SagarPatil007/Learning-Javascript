const name = "sagar"

const repoCount = 50

// console.log(name + repoCount + " Done");

// console.log(`Hello my name is `+name+` my repo count is `+repoCount);

const gameName = new String('sagar-patil')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());

// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('p'));

const newString = gameName.substring(0,4); 
console.log(newString);


const anotherString = gameName.slice(-8,6);
console.log(anotherString);


const newStringOne = "   Hitesh Sagar   ";

console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://google.com/sagar%20patil"
console.log(url.replace('%20','-'))

console.log(url)

console.log(url.includes('sagarSharma'));

console.log(gameName.split('-'));