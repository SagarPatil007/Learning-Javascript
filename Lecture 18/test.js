// objects

const course = {
    name : "jsInHindi",
    price: 99,
    instructor : "sagar"
}

// destructing

console.log(course.instructor);

const {instructor:inst} = course

console.log(inst);

// {
//     "name" : "sagar",
//     "courseName" : "js in hindi",
//     "price" : 1999,
// }   

