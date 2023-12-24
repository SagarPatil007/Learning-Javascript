let myName = "hitesh       "

// console.log(myName.trim().length);

// console.log(myName.trueLength);


let myHeros = ["thor","spiderman"]

let heroPower = {
    thor : "Hammer",
    spiderman : "sling",

    getSpiderPower : function(){
        console.log(`Spidy  power is ${this.spiderman}`);
    }
}

Object.prototype.sagar = function(){
    console.log(`sagar is present in al objects`);
}

// objects
heroPower.sagar()

// array
// myHeros.sagar()


Array.prototype.heysagar = function(){
    console.log(`Sagar says hello`);
}

// objects
// heroPower.heysagar() 

// array
myHeros.heysagar()

// Inheristance

const user = {
    name : "chai",
    email : "chai@google.com"
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TaSupport = {
    makeAssignment : "js Assignment",
    fullTime : true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user

// Mordern Synatx

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUserName = "chaiAurCode  "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Length : ${this.trim().length}`);
}

anotherUserName.trueLength()

