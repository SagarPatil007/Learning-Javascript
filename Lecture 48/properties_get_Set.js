// getter and setter through defined property Objects

function User(email,pwd){
    this._email = email,
    this._pwd = pwd

    Object.defineProperty(this,'email',{
        get : function() {
            return this._email.toUpperCase()
        },
        set : function(val){
            this._email = val
        }
    })
}

const chai = new User("Sagar@gmail.com","abcd")

console.log(chai.email);


