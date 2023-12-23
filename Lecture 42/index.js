// Javscript and classes    

// ## oop


// Object  : collection of properties and methods

const user = {
    userName : "sagar",
    loginCount : 8,
    signedIn : true,
    
    getUserDetails: function(){
        // console.log(user.userName);
        console.log(this);
    }
}

user.getUserDetails(user)



const date = new Date()

function User(userName,loginCount,isLoggedIn    ){
    this.userName = userName,
    this.loginCount = loginCount,
    this.isLoggedIn = isLoggedIn

    return this
}

console.log(User("sagar",2,true));