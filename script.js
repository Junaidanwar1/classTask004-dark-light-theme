let body=document.querySelector("body")
let button=document.getElementById("btn")

button.addEventListener('click',function changeBackground(){
    if(button.innerText === "night"){
        button.innerText='Day'
        body.style.background="black"
        button.style.background='white'
        button.style.color='black'
    } else {
        button.innerText='night';
        body.style.background='white';
        button.style.background='black'
        button.style.color='white'

    }
})