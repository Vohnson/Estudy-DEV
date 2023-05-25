const Resultado = prompt("Escolha uma alternativa:\na)\nb)\nc)\nd)")

const Resultado_Numerico = parseFloat(Resultado)

switch (Resultado_Numerico) {
  case 1:
    alert("O resultado é letra a)")
    break
  case 2:
    alert("O resultado é letra b)")
    break
  case 3:
    alert("O resultado é letra c)")
    break
  case 4:
    alert("O resultado é letra d)")
    break
  default:
    alert("Finalizando...")
}