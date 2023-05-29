/* Ternário - > condição ?(if) expressão1 :(else) expressão2
    Se a condição for verdadeira, a expressão1 será executada. 
    Caso contrário, a expressão2 será executada. 
    O ? funciona como um substituto para o if, e o : funciona como um substituto para o else.
    */

// 01- Criar um algoritmo que lê um número e verifica se ele é negativo. Se for negativo, imprimir na tela a mensagem "Numero negativo".

function exercicio01(num) {
    if (typeof num !== "number"){
        console.log("Inválido")
        return;
    }
    
     num < 0 ? console.log("Número negativo") : console.log("Número positivo");

}
exercicio01("a")

// 02 - Criar um algoritmo que leia dois números L e R. O programa deve verificar a maior área entre um quadrado de lado L e um círculo de raio R. 
//Imprimir na tela qual o maior: "Quadrado" ou "Circulo".




