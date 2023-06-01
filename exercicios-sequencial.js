//  01-Criar um algoritmo que leia um número inteiro e apresente na tela o seu antecedente e o seu sucessor.

function exercicio01(num) {
  if (typeof num !== "number") {
    console.log("Inválido");
    return;
  }

  let antecedente = num - 1;
  let sucecssor = num + 1;
  console.log(`  Número digitado:${num} ;
  sucessor:${sucecssor};
  antecedente:${antecedente}`);
}
// exercicio01(100);

// 02- Criar um algoritmo que lê dois números inteiros e imprime os números consecutivos desses números.
//(Por exemplo: se o usuário digitar 2 e -­9, a saída deverá ser 3 e -­8, porque 3 é consecutivo de 2. –8 é consecutivo de –9).

function exercicio02(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    console.log("Inválido");
    return;
  }

  let consecutivoNum1 = num1 + 1;
  let consecutivoNum2 = num2 + 1;
  console.log(`${consecutivoNum1} ${consecutivoNum2}`);
}
// exercicio02(3, "a")

//03 - Criar um algoritmo que leia dois números inteiros e apresenta na tela a soma, subtração, multiplicação e divisão dos respectivos números.

function exercicio03(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    console.log("Inválido");
    return;
  }

  let soma = x + y;
  let sub = x - y;
  let multi = x * y;
  let divisao = x / y;

  console.log(
    ` ${x} + ${y} = ${soma} \n ${x} - ${y} = ${sub} \n ${x} * ${y} = ${multi} \n ${x} / ${y} = ${divisao.toFixed(
      2
    )} `
  );
}
// exercicio03(3, 6.5);

// 04- Criar um algoritmo que leia dois números inteiros e apresente na tela o resto da divisão do primeiro pelo segundo número.

function exercicio04(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    console.log("Inválido");
    return;
  }

  let resto = x % y;
  console.log(resto);
}
// exercicio04(1,1);

// 05 - Criar um algoritmo que leia a idade de uma pessoa expressa em anos e apresente na tela esta idade expressa em meses e dias.

function exercicio05(idade) {
  if (typeof idade !== "number" || idade <= 0) {
    console.log("Idade inválida.");
    return;
  }

  let meses = idade * 12;
  let dias = idade * 365;

  console.log(
    `Você tem ${idade} anos de idade, o que equivale a ${meses} meses e ${dias} dias.`
  );
}

// exercicio05(2);

// 06 - Criar um algoritmo que leia a idade de uma pessoa expressa em anos, mês e dias e apresente na tela a idade dessa pessoa expressa apenas em dias. 
//Considerar ano com 365 dias e mês com 30 dias.

function exercicio06(a,m,d){

  if(typeof a !== "number" || typeof m !== "number" || typeof d !== "number" ){
    console.log("Inválido");
    return;
  }

  if (m > 1 || m > 12){
    console.log(`Informe um mês correto`);
    return;
  }
  else if ( d < 1 || 30){
    console.log(`Informe o dia correto`);
    return;
  }

  let ano = a  * 365;
  let mes = m * 30;
  let dias = d;
  let total = ano + mes + dias;
  
  console.log(`Idade em dias: ${total}`);

}
// exercicio06(1,12,30)

//Exercicio 07 Criar um algoritmo que leia a idade de uma pessoa expressa em dias e apresente na tela a idade dessa pessoa expressa em anos, meses e dias. 
//Considerar ano com 365 dias e mês com 30 dias.

function exercicio07(x){
if (typeof x !== "number" || x <= 0) {
  console.log("Idade inválida.");
  return;
}

let anos = x / 365;
let meses = (x % 365) / 30
let dias = (x % 365) % 30;
console.log(`${anos} ${anos > 1 ? "Anos" : "Ano"}`);
console.log(`${meses} ${meses > 1 ? "Meses" : "Mes"}`);
console.log(`${dias} ${dias > 1 ? "Dias" : "Dia"}`);
}
// exercicio07(29)

//08 Criar um algoritmo que receba uma determinada hora (hora e minutos separados) e apresente na tela a hora em minutos.

function exercicio08(h,m){
  if (typeof h !== "number" || typeof m !== "number"){
    console.log("inválido");
    return;
  }
  let total = (h*60) + m;
  console.log(`${h} horas e ${m} minutos = ${total} minutos.`)
}
exercicio08(25, 5);