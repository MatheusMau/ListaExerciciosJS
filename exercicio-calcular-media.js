(function (){
  /* Pode receber um ou mais valores numéricos
    Deve retornor um único número
    Deve gerar um erro se receber um pârametro não número
    Deve retorar zero caso não receba nenhum pârametro 
    
    Exemplos: calcularMedia () // retorna 0
              calcularMedia (2,6) // retorna 4
              calcularMedia (2, 6,1,1,2,6) // retorna 3
              calcularMedia ("2", "6") // retorna Error
    função auto invocavel.
    */

  function calcularMedia() {
    let soma = 0;
    for (let i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] !== "number") {
        throw Error("Número inválido");
      }
      soma += arguments[i];
    }
    let div = soma / arguments.length;
    return div.toFixed(2);
  }
  let resultado = calcularMedia(3,4,5);
  console.log(resultado);
})()