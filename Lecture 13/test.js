// Dates

let myDate = new Date();

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

// const mycreatedDate = new Date(2023,0,23)
// console.log(mycreatedDate);
// console.log(mycreatedDate.toDateString());
// console.log(mycreatedDate.toJSON());


const newDate = new Date();

console.log(newDate.toLocaleString('default',{
    dateStyle : "short"
}));