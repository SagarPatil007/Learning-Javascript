// this and arrow function

const user = {
    userName : "sagar",
    price : 999,
    welcomeMessage:function(){
        console.log(`Hello welcome ${this.userName}`);
    }
}


// user.welcomeMessage()
// user.userName = "sam"
// user.welcomeMessage()

// console.log(this);


// function chai() {
//     let userName = "sagar"
//     console.log(this.userName);
// }

// chai()


const chai = ()=>{
    let userName = "sagar"
    console.log(this);
}

// chai()


// Arrow Function

const addTwo = (n1,n2)=>{
    return n1 + n2
}

console.log(addTwo(4,5))

const add = (n1,n2) => (n1 + n2)

console.log(add(1,2));