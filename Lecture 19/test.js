// functions

function sayName() {
    console.log('h');
    console.log('e');
    console.log('l');
    console.log('l');
    console.log('o');
}

// sayName()

function addNumber(num1,num2) {
    console.log(num1 + num2);
    return num1 + num2
}

const result = addNumber(3, 5)

// console.log(result);

function loginUserName(userName){

    if(userName == undefined){
        console.log("Please enter the name");
        return;
    }
    return `${userName} just logged in`
}

// console.log(loginUserName("sagar"))
console.log(loginUserName())

