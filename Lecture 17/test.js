const tinderUser = new Object(); // singlton object

// const tinderUser = {} // non singleton object

tinderUser.name = "Rahul"
tinderUser.email = "rahul123@gmail.com"
tinderUser.isLoggedIn = true

// console.log(tinderUser);

// nested Objects

const simpleUser =  {
    email : "user@gmail.com",
    fullname :{
        userFullName :{
            firstName:"user",
            lastName:"admin"
        }
    }
}

// console.log(simpleUser.fullname.userFullName.firstName);

const obj1 = {
    1 : 'a',
    2 : 'b',
}

const obj2 = {
    3 : 'c',
    4 : 'd',
}

// const obj3 = Object.assign({}, obj1 , obj2)
const obj3 = {...obj1 , ...obj2}

// console.log(obj3)

const user = [
    {
        id:1,
        email:"user@email.com"
    },
    {
        id:1,
        email:"user@email.com"
    },
    {
        id:1,
        email:"user@email.com"
    },
    {
        id:1,
        email:"user@email.com"
    },
    {
        id:1,
        email:"user@email.com"
    }
]

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


console.log(Object.keys(user));
