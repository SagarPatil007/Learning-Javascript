//  array

const marvelHero = ['thor','spiderman','ironman']

const dcHero = ['batman','superman','flash']

// marvelHero.push(dcHero)
const allhero = marvelHero.concat(dcHero)

// console.log(allhero);

// spread opeartor
const allnewHeros = [...marvelHero,...dcHero];
// console.log(allnewHeros);

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[8],5]]

const realArray = anotherArray.flat(Infinity);

// console.log(realArray);

console.log(Array.isArray("hitesh"));

console.log(Array.from("hitesh"));

console.log(Array.from({name : "hitesh"})); // case : it cant change into array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));