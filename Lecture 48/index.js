// getter and setters

class User {
    constructor(email,pwd){
        this.email = email;
        this.pwd = pwd;
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }
    
    get pwd(){
        return this._pwd.toUpperCase()
    }

    set pwd(value){
        this._pwd = value
    }

}

const sagar = new User("sagar@gmail.com","abcd")

console.log(sagar.email);