const child = document.querySelectorAll(".child");
const body = document.querySelector("body");
child.forEach((el)=>{
    el.addEventListener("click",(e)=>{
        body.style.backgroundColor = e.target.id;
    })
})