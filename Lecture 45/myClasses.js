// Es6

class User{
    constructor(userName,email,pwd){
        this.userName =  userName;
        this.email= email;
        this.pwd = pwd;
    }

    encryptPassword(){
        return `${this.pwd}abc`
    }

    changeUserName(){
        return `${this.userName.toUpperCase()}`
    }

}

const chai = new User("chai","chai@gmail.com","123")
console.log(chai.encryptPassword());
console.log(chai.changeUserName());