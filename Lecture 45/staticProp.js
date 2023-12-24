class User{
    constructor(userName){
        this.userName = userName
    }

    logMe(){
        console.log(`Username : ${this.userName}`);    
    }

    static createID(){
        return `123`
    }
}

const sagar = new User("Sagar")
console.log(User.createID());