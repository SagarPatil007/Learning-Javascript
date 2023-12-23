// const promiseOne = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log('Async task is complete');
//         resolve()
//     },1000)
// })

// promiseOne.then(()=>{
//     console.log('promise is complete');
// })

// const promiseThree = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({userName : "sagar" , email :"sagarpatil@gmail.com"})
//     },1000)
// }).then((user)=>{
//     console.log(user);
// })

// const promiseFour = new Promise((reject,resolve)=>{
//     let error = false
//     setTimeout(()=>{
//         if(error){
//             resolve({userName:"sagar",password:"1234"})
//         }else{
//             reject('Error : something went wrong')
//         }
//     },1000)
// })

// promiseFour.then((user)=>{
//     return user.userName
// }).then((userName)=>{
//     console.log(userName);
// }).catch((e)=>{
//     console.log(e);
// })

fetch("https://api.github.com/users/sagarpatil007")
.then((res)=>{
    return res.json();
}).then((data)=>{
    console.log(data);
})