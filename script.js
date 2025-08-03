let imagem = document.querySelector('#imagem-copo');
let circulo = document.querySelector('#circulo');

function mudarImagem(endereco) {
  imagem.src = endereco
}

function corCirculo(cor) {
  circulo.style.backgroundColor = cor;
}