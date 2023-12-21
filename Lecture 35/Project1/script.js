const buttons = document.querySelectorAll('.button')

const body = document.querySelector('body')

buttons.forEach((btn)=>{
    console.log(btn);
    btn.addEventListener('click',(e)=>{
        console.log(e.target.id);
        if(e.target.id == "red"){
            body.style.backgroundColor = "red"
        }else if(e.target.id == "white"){
            body.style.backgroundColor = "white"
        }else if(e.target.id == "green"){
            body.style.backgroundColor = "green"
        }else if (e.target.id == "blue"){
            body.style.backgroundColor = "blue"
        }
    })
})  