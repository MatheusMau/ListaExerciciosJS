/* IMC = peso / altura * altura
    deve receber um número(imc)
    Deve retorar uma string
    Deve gerar um erro se receber um pârametro não número
    Deve retorar erro caso não receba parâmetro.

    Muito abaixo do peso 16 a 16,9 kg/m2

    Abaixo do peso 17 a 18,4 kg/m2

    Peso normal 18,5 a 24,9 kg/m2

    Acima do peso 25 a 29,9 kg/m2

    Obesidade Grau I 30 a 34,9 kg/m2

    Obesidade Grau II 35 a 40 kg/m2

    Obesidade Grau III maior que 40 kg/m2
   
    função auto invocavel.
    */

function calcularImc(peso, altura) {
  if (typeof peso !== "number" || typeof altura !== "number") {
    throw Error("Entrada inválida");
  }
  let total = peso / (altura * altura);

  if (total <= 16.9) {
    return "Muito abaixo do peso";
  } else if (total <= 18.4) {
    return "Abaixo do peso";
  } else if ((total <= 24.9)) {
    return "Peso normal";
  } else if (total <= 29.9) {
    return "Acima do peso";
  } else if (total <= 34.9) {
    return "Obesidade Grau I";
  } else if (total <= 40) {
    return "Obesidade Grau II";
  } else {
    return "Obesidade Grau III";
  }
}

let imc = calcularImc(73, 1.75);
console.log(imc);
