// let titulo = document.getElementsByTagName("h1")[0]


// let paragrafo = document.getElementsByClassName("paragrafoUm")[0]


// paragrafo.innerHTML = "Esse meu paragrafo é muito louco"

// titulo.style.color = "red"

// paragrafo.style.color ="blue"

let titulo = document.getElementById("titulo")

let paragrafos = document.getElementsByTagName("p")

titulo.innerHTML = "Hola, mi nombre es Danilo"

for (let i = 0; i < paragrafos.length; i++) {
    const element = paragrafos[i];
    if(paragrafos[i] == paragrafos[0]){
        paragrafos[i].innerHTML = "Primeiro parágrafo"
        paragrafos[i].style.color = "blue"
    }
  
    else if(paragrafos[i] == paragrafos[1]){
        paragrafos[i].innerHTML = "Segundo parágrafo"
        paragrafos[i].style.color = "red"
    }

    else if(paragrafos[i] == paragrafos[2]){
        paragrafos[i].innerHTML = "Terceiro parágrafo"
        paragrafos[i].style.color = "green"
    }    
}


