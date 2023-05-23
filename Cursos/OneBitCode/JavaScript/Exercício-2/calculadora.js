const entrada1 = prompt("Informe o 1º número:")
const entrada2 = prompt("Informe o 2º número:")

const x = parseFloat(entrada1)
const y = parseFloat(entrada2)

const soma = x + y
const subtração = x - y
const multiplicação = x * y
const divisão = x / y

alert(
  "Resultados:\n" +
  "\nSoma: " + soma +
  "\nSubtração: " + subtração +
  "\nMultiplicação: " + multiplicação +
  "\nDivisão: " + divisão
)
