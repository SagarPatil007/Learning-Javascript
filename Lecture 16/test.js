// singleton
// Object.create 

// object literals

const mySym = Symbol('Key1')

const jsUser = {
    name:"sagar",
    age:22,
    [mySym] : "Hello",
    location:"surat",
    email:"sagarpatil98754@gmail.com",
    isLoggedin:true,
    lastLoginDays : ["Monday", "Wednesday"]
}

// console.log(jsUser["lastLoginDays"]);
// console.log(jsUser[mySym]);

jsUser.email = "sagarpatil@gmail.com"
// Object.freeze(jsUser)

jsUser.email = "saagarpatil@google.com";    
console.log(jsUser);


jsUser.greet = function(){
    console.log("Hello jsUser from function");
}

jsUser.greet();


jsUser.greet2 = function(){
    console.log(`Hello jsUser from function ${this.name}`);
}

jsUser.greet2()
