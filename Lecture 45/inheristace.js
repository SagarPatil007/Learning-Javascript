class User{
    constructor(userName){
        this.userName = userName
    }

    logMe(){
        console.log(this.userName);
    }
}

class Teacher extends User{
    constructor(userName,email,pwd){
        super(userName)
        this.email = email
        this.pwd = pwd
    }

    addCourse(){
        console.log(`A new Course was added by ${this.userName}`);

    }
}


const chai = new Teacher("chai","chai@gmail.com","123")
console.log(chai);

