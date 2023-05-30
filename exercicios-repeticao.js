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

// 6 Criar um algoritmo que apresente os valores da conversão de polegadas para centímetros, de 3 em 3, iniciando a contagem em 1 polegada e terminando em 13 polegadas. 
// Uma polegada equivale a aproximadamente 2,54 centímetros.