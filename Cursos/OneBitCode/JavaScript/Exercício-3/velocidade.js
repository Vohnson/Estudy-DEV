//vamos começar obtendo os nomes e velocidades dos dois veículos:
const veiculo1 = prompt("Informe o nome do 1º veiculo:")
const velocidade1 = prompt("Informe a velocidade do 1º veiculo:")

const veiculo2 = prompt("Informe o nome do 2º veiculo:")
const velocidade2 = prompt("Informe a velocidade do 2º veiculo:")

//Agora vamos escrever um IF para exibir o resultado apropriado na tela:
if (velocidade1 > velocidade2) {
  alert(veiculo1 + " é mais rápido do que " + veiculo2)
} else if (velocidade2 > velocidade1) {
  alert(veiculo2 + " é mais rápido do que " + veiculo1)
} else {
  alert(veiculo1 + " e " + veiculo2 + " possuem velocidades iguais.")
}