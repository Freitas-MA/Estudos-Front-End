var altura = 0
var largura = 0
var vida = 1
var tempo = 10


function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth 

    console.log(altura, largura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function(){
    tempo--

    if(tempo < 0){
        window.location.href = 'victory.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }
    
    
}, 1000)

function posicaoRandomica () {
    // Remover o anterior (caso exista!)
        if(document.getElementById('mosquito')) { 
            document.getElementById('mosquito').remove()
            
           if(vida > 3) {
                window.location.href = 'game_over.html'
           } else {
            document.getElementById('v'+vida).src = './src/image/coracao_vazio.png'
           
            vida++
            
           }
        }
        var positionX = Math.floor(Math.random() * largura) - 90
        var positionY = Math.floor(Math.random() * altura) - 90
            positionX = positionX < 0 ? 0 : positionX
            positionY = positionY < 0 ? 0 : positionY
            console.log(positionX, positionY)

        //criar elementos html 

        var mosquito = document.createElement('img')
            mosquito.src = './src/image/mosquito.png'
            mosquito.className = tamanhoAleatorio() +' ' + ladoAleatorio()
            mosquito.style.left = positionX + 'px'
            mosquito.style.top = positionY + 'px'
            mosquito.style.position = 'absolute'
            mosquito.id = 'mosquito'
            mosquito.onclick = function() {
                this.remove()
            }
                
                document.body.appendChild(mosquito)
}
       
// Tamanho do mosquito!
function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)
    
    switch(classe) {
        case 0:
            return 'mosquito1'
        case 1: 
            return 'mosquito2'    
        case 2:
            return 'mosquito3'
    }
}
function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)
    
    switch(classe) {
        case 0:
            return 'ladoA'
        case 1: 
            return 'ladoB'    
    }
}