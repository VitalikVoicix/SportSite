const btn  = document.querySelector(".burgerr")
const menu = document.querySelector(".container-fluid")
btn.addEventListener("click",()=>{
 menu.classList.toggle("header-menu")

});
btn.addEventListener("click",()=>{
    menu.classList.toggle("container-fluid")
    });
//    btn.addEventListener("mouseup",()=>{
//  menu.classList.toggle("header-menu")
 
// });