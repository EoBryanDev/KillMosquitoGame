var altura = 0
var largura = 0
var vidas = 1
var tempo = 10

var criamoscatempo = 1500
var nivel = window.location.search
nivel = nivel.replace('?','')

if (nivel === 'normal') {
	//1500
	criamoscatempo = 1500

} else if (nivel === 'dificil') {
	//1000
	criamoscatempo = 1000

} else if (nivel === 'chucknorris'){
	//750
	criamoscatempo = 750
}

function ajustaTamanho(){
			
	altura = window.innerHeight
	largura = window.innerWidth
	console.log(largura, altura)

	}

	ajustaTamanho()

	var cronometro = setInterval(function(){
		tempo -= 1
		if (tempo < 0 ) {
			clearInterval(cronometro)
			clearInterval(criamosca)
			window.location.href = 'vitoria.html'
		} else {
			document.getElementById('cronometro').innerHTML = tempo
		}
		
		
	} , 1000)

function posicaoRandomica() {

	if (document.getElementById('mosca')) {
		document.getElementById('mosca').remove()

		if (vidas >3) {
			window.location.href = 'fimdejogo.html'

			 }else {
			document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"

			vidas++
			}

		}
	
		//definicao de coordenadas randomicas

	var posicaoX = Math.floor(Math.random() * largura ) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

		//se as coordenadas forem < 0

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX,posicaoY)

	//criando moscas html atraves de js
		//criando uma imagem através do DOM e atribuindo a uma variável
	var mosca = document.createElement('img')
		//colocando dentro dessa "tag img" a imagem no diretório
	mosca.src = 'imagens/mosca.png'
		//atribuindo a modelação do CSS na imagem
	mosca.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
		//colocando em posição randomica na tela eixo X
	mosca.style.left = posicaoX + 'px'
		//colocando em posicao randomica na tela eixo Y
	mosca.style.top = posicaoY + 'px'
		//definindo imagem como absoluta, ou seja acima de qualquer elemento
	mosca.style.position = 'absolute'
		//criar um id para que possa ser realizado a remoção
	mosca.id = 'mosca'
		//criar a opcao de clicar no mosquito para mata-lo
	mosca.onclick = function() {

		this.remove()
	}

		//colocando de fato a imagem no body
	document.body.appendChild(mosca)
}

function tamanhoAleatorio(){
	var classe = Math.floor(Math.random() * 3 )

	switch(classe) {

		case 0:
		return 'mosca1'

		case 1:
		return 'mosca2'

		case 2:
		return 'mosca3'
	}
}

function ladoAleatorio(){
	var classe = Math.floor(Math.random() * 2 )

	switch(classe) {

		case 0:
		return 'ladoA'

		case 1:
		return 'ladoB'

	}
}