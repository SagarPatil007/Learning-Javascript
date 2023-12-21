const clock = document.querySelector('#clock')

const date = new Date();

console.log(date.toLocaleDateString());

setInterval(()=>{
    const date = new Date();
    clock.innerHTML = date.toLocaleTimeString()
},1000)

