// Obter o valor em metros:
const Medida_em_Metros = prompt("Informe a medida em Metros (m):")
const Aferição = parseFloat(Medida_em_Metros)

// Escolha da unidade de converção:
const Unidade_de_Medida = prompt(
  "Escolha a unidade de medida para converção:" +
"\n1 - milímetro (mm)" +
"\n2 - centímetro (cm)" +
"\n3 - decímetro (dm)" +
"\n4 - decâmetro (dam)" +
"\n5 - hectômetro (hm)" +
"\n6 - quilômetro (km)"
)
const Escolha = parseFloat(Unidade_de_Medida)

// Converção:
switch (Escolha) {
  case 1:
    alert(Aferição + " metros é a mesma coisa de " + Aferição*1000 + " mm - Milímetros")
    break
  case 2:
    alert(Aferição + " metros é a mesma coisa de " + Aferição*100 + " cm - Centímetros")
    break
  case 3:
    alert(Aferição + " metros é a mesma coisa de " + Aferição*10 + " dm - Decimetros")
    break
  case 4:
    alert(Aferição + " metros é a mesma coisa de " + Aferição/10 + " dam - Decâmetro")
    break
  case 5:
    alert(Aferição + " metros é a mesma coisa de " + Aferição/100 + " hm - Hectômetro")
    break
  case 6:
    alert(Aferição + " metros é a mesma coisa de " + Aferição/1000 + " km - Quilômetro")
    break
  default:
    alert("🛑ERRO - Opção inválida")
}