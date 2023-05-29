// 1 Criar um algoritmo que apresente o quadrado dos números inteiros de 15 a 200.

function exercicio01(){
    let soma = 0;
    for(let i =15; i <= 200; i++){
        soma = i * i
        console.log(`posição:${i}=${soma}`);
    }    
}
exercicio01()
