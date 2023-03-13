var altura = 0
var largura = 0

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth 

    console.log(altura, largura)
}

ajustaTamanhoPalcoJogo()



var positionX = Math.floor(Math.random() * largura)
var positionY = Math.floor(Math.random() * altura)
console.log(positionX, positionY)

//criar elementos html 

var mosquito = document.createElement('img')

mosquito.src = '../image/mosquito.png'

document.body.appendChild(mosquito)