// map and reduce

// const coding = ["js","python","ruby","c++"]

// const values = coding.forEach((item)=>{
//     console.log(item);
//     return item
// })

// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]

const res = myNums.filter( (num)=> {
    return num > 4
} )

// console.log(res);

// if we opned the scope then return is must

const newNums = []

myNums.forEach((item)=>{
    if(item > 4){
        newNums.push(item)
    }
})

// console.log(newNums);


const books = [
    {
        title:'Book One',
        genre :'Fiction',
        publish:1981,
        edition:2004,
    },
    {
        title:'Book Two',
        genre :'Non-Fiction',
        publish:1992,
        edition:2008,
    },
    {
        title:'Book Three',
        genre :'History',
        publish:1999,
        edition:2007,
    },
    {
        title:'Book Four',
        genre :'Non-Fiction',
        publish:1989,
        edition:2014,
    },
    {
        title:'Book Five',
        genre :'Science',
        publish:2009,
        edition:2007,
    },
    {
        title:'Book Six',
        genre :'Fiction',
        publish:1987,
        edition:2010,
    },
]

let userBooks = books.filter((bk) => {
    return bk.genre === "History"
})

userBooks = books.filter((bk)=>{
    return bk.publish >= 1995 && bk.genre === 'History'
})

console.log(userBooks);





