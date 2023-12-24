// calls and this

function setUserName(userName)  {
    // complex Db calls
    this.userName = userName
    console.log("called");
}

function createUser(userName,email,password) {
    setUserName.call(this , userName)
    this.email = email,
    this.password = password
}

const chai = new createUser("Chai", "chai@gmail.com","1234")
console.log(chai);