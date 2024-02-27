function mudaCorTexto(){
    document.querySelector("#p1").style.color="red"
}

function mudaCorFundo(){
    document.querySelector("#p1").style.background="green"
}

function alternarTexto(){
    textoForm = document.querySelector("textimput").value
    document.querySelector("texto2").innerHTML.HTML = textoForm
}