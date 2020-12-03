const btn  = document.querySelector(".burgerr")
const menu = document.querySelector(".container-fluid")
btn.addEventListener("click",()=>{
 menu.classList.toggle("header-menu")
 console.log("click")
});
btn.addEventListener("click",()=>{
    menu.classList.toggle("container-fluid")
    });
   