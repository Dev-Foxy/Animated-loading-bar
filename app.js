let no = document.querySelector(".no")
let count = 0

setInterval(() =>{
    if(count == 95){
        clearInterval
    }else{
        count++
        no.innerHTML = count + "%"
    }
},20)