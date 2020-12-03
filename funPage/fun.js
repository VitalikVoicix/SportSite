const btn  = document.querySelector(".burgerr")
const menu = document.querySelector(".container-fluid")
btn.addEventListener("click",()=>{
 menu.classList.toggle("header-menu")
});
btn.addEventListener("click",()=>{
    menu.classList.toggle("container-fluid")
    });
   
const area = document.querySelector(".area")
const sent = document.querySelector(".btn")
 getAreaText =()=>{
    const area = document.querySelector(".area")
    return area.value;
}
function buttonClick(){
    const text=getAreaText()
    text ==="" ? alert('Ваша форма не заповнена!!!!') : addElementToList(text)
    clearInput();
}

function addElementToList(text){
   const last= document.querySelector(".main")
   const listItem=document.createElement('div')
   let dateAppeal = document.createElement("div")
       let name = document.createElement("p")
       let date=new Date()

       dateAppeal.innerText=`${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`
       listItem.innerText = text;
       name.innerText="Some fun"

      last.before(listItem)
      listItem.append(dateAppeal)
      listItem.append(name)
      listItem.classList.add('lorem1')
      dateAppeal.classList.add('date')
      name.classList.add('fan')
}

function clearInput(){
    const area = document.querySelector(".area")
    area.value = "";

}












// function clearInput (){
//     const input = document.querySelector(".area")
//     input.value=""
// }