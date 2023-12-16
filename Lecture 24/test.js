// Immediately Invoked functions Expressions (IIFE)


(function chai() {
    console.log(`Db connected`);
})();


// global scope avoid 
(function hello(){console.log(`hello`);})();

((name) =>{
    console.log(`db ${name}`);
})('sagar');