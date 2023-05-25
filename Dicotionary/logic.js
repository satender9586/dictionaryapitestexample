const wrapper = document.querySelector(".wrapper")
const searchInput = document.querySelector("input")
const inputtext = document.querySelector(".info-text")

const data = (result, word)=>{
    if(result.title){
        inputtext.innerHTML=`can not find this ${word} Meaning`
    }else{
        console.log(result)
        wrapper.classList.add("active")
        let definitions = result[0].meanings[0].definitions[0]
     


        document.querySelector(".word p").innerHTML = result[0].word;
        document.querySelector(".meaning span").innerHTML = definitions.definition;
        document.querySelector(".example span").innerHTML = definitions.definition;
    }
}

const featchApi = (word)=>{
    inputtext.style.color ="#000";
    inputtext.innerHTML=`Searching the meaning of <span>"${word}"</span>`
    var api =`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    fetch(api).then(res => res.json()).then((result =>{
        data(result, word)
    }))
}

searchInput.addEventListener("keyup", e =>{
    
    if(e.key ==="Enter" && e.target.value){
        featchApi(e.target.value)
    }

    
})