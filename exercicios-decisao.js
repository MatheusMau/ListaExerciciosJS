/* Ternário - > condição ?(if) expressão1 :(else) expressão2
    Se a condição for verdadeira, a expressão1 será executada. 
    Caso contrário, a expressão2 será executada. 
    O ? funciona como um substituto para o if, e o : funciona como um substituto para o else.
    */

// 01- Criar um algoritmo que lê um número e verifica se ele é negativo. Se for negativo, imprimir na tela a mensagem "Numero negativo".

function exercicio01(num) {
  if (typeof num !== "number") {
    console.log("Inválido");
    return;
  }

  num < 0 ? console.log("Número negativo") : console.log("Número positivo");
}
// exercicio01("a")

// 02 - Criar um algoritmo que leia dois números L e R. O programa deve verificar a maior área entre um quadrado de lado L e um círculo de raio R.
//Imprimir na tela qual o maior: "Quadrado" ou "Circulo".

function exercicio02(l, r) {
  if (typeof l !== "number" || typeof r !== "number") {
    console.log("inválido");
    return;
  }

  let areaQuadrado = l * l;
  let areaCirculo = Math.PI * Math.pow(r, 2);

  if (areaQuadrado > areaCirculo) {
    console.log(`O quadrado é maior.Área: ${areaQuadrado}`);
  } else if (areaCirculo > areaQuadrado) {
    console.log(`O círculo é maior. Área: ${areaCirculo.toFixed(4)}`);
  } else {
    console.log("O quadrado e o círculo possuem áreas iguais.");
  }
}
// exercicio02(4.3, 3.5);

// 03 - Criar um algoritmo que leia três números e imprime o maior deles.

function exercicio03(num1, num2, num3) {
  if (
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    typeof num3 !== "number"
  ) {
    console.log("Inválido");
    return;
  }
  if (num1 === num2 && num2 === num3) {
    console.log("Os três números são iguais.");
  } else if (num1 > num2 && num1 > num3) {
    console.log(`O número ${num1} é o maior dos três números`);
  } else if (num2 > num3) {
    console.log(`O número ${num2} é o maior dos três números`);
  } else {
    console.log(`O número ${num3} é o maior dos três números`);
  }
}
// exercicio03(3,3,3);

// 04 Criar um algoritmo que leia um valor e apresente na tela se esse valor é positivo ou negativo (considere o valor zero como positivo).

function exercicio04(valor) {
  if (typeof valor !== "number") {
    console.log("Inválido");
    return;
  }

  if (valor <= 0) {
    console.log("negativo");
  } else {
    console.log("positivo");
  }
}
// exercicio04(0);

// 05 Criar um algoritmo que leia dois números e imprime a divisão do maior pelo menor.

function exercicio05(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    console.log("Inválido");
    return;
  }

  if (num1 > num2){
    console.log(`${num1 / num2}`);
  }
  else{
    console.log(`${num2 / num1}`);
  }
}
// exercicio05(5, 10);

// 06 e 07 Criar um algoritmo que leia uma velocidade e caso o valor lido seja maior que 70 apresentar na tela Multado.
function exercicio06(velocidade){
    if ( typeof velocidade !== "number"){
        console.log("Inválido");
        return;
    }

    if(velocidade > 70){
        console.log("Multado");
    }
    else{
        console.log("Não multado");
    }
}
// exercicio06(71)


//08 Uma empresa decide dar aumento de 15% aos funcionários cujo salário é inferior a 500 reais. 
//Criar um algoritmo que leia o salário de um funcionário e apresente na tela o valor do salário reajustado ou o valor do salário informado caso ele não tenho direito ao reajuste.

function exercicio08(y){
  if (typeof y !== "number"){
    console.log("Inválido");
    return;
  }
  let reajuste = (y * 0.15) + y;

  if ( y < 500){
    console.log(`Salário reajustado para: ${reajuste}`);
  }
  else{
    console.log(`Salário de ${y} não tem direito ao reajuste`)
  }

}
// exercicio08(300)
function exercicio09(y) {
  if (typeof y !== "number") {
    console.log("Inválido");
    return;
  }
  let reajuste = y * 0.15 + y;

  if (y < 500) {
    console.log(`Salário reajustado para: ${reajuste}`);
  } else {
    console.log(`Salário de ${y} não tem direito ao reajuste`);
  }
}