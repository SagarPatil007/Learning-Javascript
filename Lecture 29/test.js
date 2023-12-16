// High order array loop

// for of

// [{},{},{}]

const array = [1,2,3,4,5]

for (const num of array) {
    console.log(num);
}

const map = new Map()
map.set('IN',"India")
map.set('USA',"United State Of America")
map.set('FR',"France")

console.log(map);

for (const [key,value] of map) {
    console.log(`key is : ${key} and value is : ${value}`);
}

const myObj = {
    'game1' : 'nfs',
    'game2' : 'spider man'
}

const coding = ["js","ruby","python","c++","java"]


coding.forEach(element => {
    console.log(element);
});