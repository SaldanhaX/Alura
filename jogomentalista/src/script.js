var numeroSecreto = parseInt(Math.random() * 1001)

//enquanto o jogador não acertar, imprimir o comando novamente
while(chute != numeroSecreto) {
var chute = prompt('Digite um número entre 0 e 1000')
  //se o chute for igual ao número secreto
  if (chute == numeroSecreto){
  //alerta de acerto
   alert('Acertou!')
  //se o chute for diferente, alerta com dica:
  } else if (chute > numeroSecreto) {
    alert('Errou... O número secreto é menor')
  } else if (chute < numeroSecreto) {
    alert('Errou... O número secreto é maior')
  }
}