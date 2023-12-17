const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.map((nums)=>{
    return nums + 10 
})

// console.log(newNums);

// chaining

const nums = myNums
                .map((num)=> num * 10 )
                .map((num)=> num + 1)
                .filter((item)=> item >= 40)

console.log(nums);