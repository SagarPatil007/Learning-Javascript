const myNums = [1,2,3]

const res = myNums.reduce((acc,currval)=>{
    console.log(`acc : ${acc} and currval : ${currval}`);
    return acc + currval
},0)

console.log(res);

const shoppingCart = [
    {
        itemName : 'js Course',
        price : 2999
    },
    {
        itemName : 'python Course',
        price : 999
    },
    {
        itemName : 'mobile developement Course',
        price : 5999
    },
    {
        itemName : 'Data Science Course',
        price : 1299
    },
]

const result = shoppingCart.reduce((acc,item)=>{
    return acc + item.price
},0)

console.log(result);