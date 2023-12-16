// for loop 

const array =[1,2,3,4,5,6,7,8,9,10]
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(element);    
// }

// break after 5
for (let i = 0; i < array.length; i++) {
    if(i == 5){
        break
    }
    const element = array[i];
    console.log(element);    
}

// skip 2 and 7
for (let i = 0; i < array.length; i++) {
    if(i+1 == 2 || i+1 == 7){
        continue
    }
    const element = array[i];
    console.log(element);    
}