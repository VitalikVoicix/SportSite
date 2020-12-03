const area = document.querySelector(".area").value
const send = document.querySelector(".btn")
const main = document.querySelector("main")

function message (){
    send.addEventListener('click',()=>{
if(area===""|| area.replace(/\s/g, "")===""){
alert('Please write yout text')

}else{
    let article = document.createElement("div")
    let date = document.createElement("div")
    let story = document.createElement("p")
    let name = document.createElement("p")
    let date=new Date()
}
article.classList.add("lorem1")
date.classList.add("date")
story.classList.add("story")
name.classList.add("fun")

date.innerText=`${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`
area=""
main.before(article);
article.prepand(story)
article.append(date)
article.append(name)


    })
}