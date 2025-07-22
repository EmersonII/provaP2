let bloco1 = document.querySelector(".bloco1");
let bloco2 = document.querySelector(".bloco2")
let bloco3 = document.querySelector(".bloco3")
let bloco4 = document.querySelector(".bloco4")
let bloco5 = document.querySelector(".bloco5")

bloco1.addEventListener("click", mudarCor)
bloco2.addEventListener("dblclick", addMensagem)
bloco3.addEventListener("mouseover", mensagemMouse)
document.addEventListener("keydown", borda)
bloco5.addEventListener("click", novoQuadrado)

pai = document.querySelector(".mensagem")
textoMouse = document.createElement("h4")
textoMouse.innerText = "Você passou o mouse no bloco 3"
divPaiQuadrado  = document.querySelector(".novosQuadrados")

function mudarCor(event) {
    event.currentTarget.style.background = "#e2725b"
}

function addMensagem() {
    mensagem = document.createElement("h4")
    mensagem.innerText = "Você clicou duas vezes no bloco 2"
    pai.appendChild(mensagem)
}

function mensagemMouse() {
    pai.appendChild(textoMouse)
}

function borda(event) {
    if (event.key == "Escape") {
        bloco4.style.border = "5px solid rgb(255, 42, 0)"
    }
}

function novoQuadrado(event) {
    let novo = document.createElement("div")
    novo.innerHTML = "<h1>Quadrado novo</h1>"
    novo.id = "bloco"
    divPaiQuadrado.appendChild(novo)
}