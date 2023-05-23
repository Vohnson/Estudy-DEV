const Primeiro_Nome = prompt("Informe o primeiro nome do recruta:")
const Sobrenome = prompt("Informe o sobrenome do recruta:")
const Campo_de_Estudo = prompt("Qual é o campo de estudo do recruta?")
const Ano_de_Nascimento = prompt("Qual é o ano de nascimento do recruta?")

alert(
  "Recruta cadastrado com sucesso!\n" +
  "Nome completo: " + Primeiro_Nome + " " + Sobrenome +
  "\nCampo de estudo: " + Campo_de_Estudo + 
  "\nIdade: " + (2022 - Ano_de_Nascimento) + " anos"
)