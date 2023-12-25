// getter and setter

const User = {
    _email : 's@gmail.com',
    _pwd : "abc",

    get email(){
        return this._email.toUpperCase()
    },

    set email(val){
        this._email = val
    }
}