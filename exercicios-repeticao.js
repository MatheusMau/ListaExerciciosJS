// 01 Criar um algoritmo que apresente o quadrado dos números inteiros de 15 a 200.

function exercicio01(){
    let soma = 0;
    for(let i =15; i <= 200; i++){
        soma = i * i
        console.log(`posição:${i}=${soma}`);
    }    
}
// exercicio01()

// 02 Criar um algoritmo que apresente na tela os números de 1 a 50 em ordem decrescente.
function exercicio02(){
    for( let i=50; i >0; i--){
         console.log(i);
    }
    
}
// exercicio02()

// 03 e 04 Criar um algoritmo que calcule e apresente na tela a tabuada do y (1 a 10).
function exercicio03(y){
    if(typeof y !== "number"){
        console.log("Inválido");
        return;
    }

    let tabuada =0;
    for(let i =1; i<= 10; i++){
        tabuada = i * y
        console.log(`${i} X ${y} = ${tabuada}`);
    }
}
// exercicio03(3)


// 5 Criar um algoritmo que apresente na tela o total da soma dos cem primeiros números inteiros positivos (1 + 2 + 3 + ... + 98 + 99 + 100).

    function exercicio05(){
        let soma = 0;
        for (let i = 1; i <= 100; i++){        
             soma = soma + i
            console.log(soma)
        }
    }
//   exercicio05()

// 6- Criar um algoritmo que apresente os valores da conversão de polegadas para centímetros, de 3 em 3, iniciando a contagem em 1 polegada e terminando em 13 polegadas. 
// Uma polegada equivale a aproximadamente 2,54 centímetros.

function exercicio06(){
    let polegada = 2.54;
    for( let i = 1; i <= 13; i+=3){
        
        console.log(i * polegada);
        
    }
}
// exercicio06()

// 7 - O número 3025 possui a seguinte característica: 30+55 =55 e 55² = 3025 . 
//Criar um algoritmo que apresente na tela todos os números de quatro algarismos que possuem a característica citada.
function exercicio07() {
  for (let i = 1000; i < 9999; i++) {
    let num1 = Math.floor(i / 100); // arredonda
    let num2 = i % 100;
    let soma = num1 + num2;
    let quad = soma * soma;
    if (quad === i) {
      console.log(i);
    }
  }
}
// exercicio07();

// 8 - Criar um algoritmo que leia um número inteiro e apresente na tela o seu fatorial. (Dica: 5! = 5x4x3x2x1 = 120).
function exercicio08(num){
 if(typeof num !== "number"){
    console.log("inválido");
    return;
 }
 let soma =0;
 for (let i=num; i==num; i--){
    soma = soma + 1
    console.log(soma);
 }
}
exercicio08(3);