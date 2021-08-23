//
// This is the 'Difference Of Squares' exercise. 
//

export class Squares {
  numero = 0;    // declaração da variável global numero

  constructor(number) {
    this.numero=number;    // numero recebe o valor number fornecido
  }

  get sumOfSquares() {  // soma de quadrados
    var somaDeQuadrados = 0;  // declaração da variável que receberá a soma dos quadrados
    for (let i = this.numero; i > 0 ; i--){  // laço for será executado no intervalo de numero a 1 (forma decrescente)
      somaDeQuadrados = somaDeQuadrados + (i ** 2);  // variavel somaDeQuadrados incrementada com valor de i^2 em cada loop
    }
    return somaDeQuadrados;  // É retornado o valor resultante da soma dos quadrados dos valores do intervalo de 1 até n (numero)
  }

  get squareOfSum() {  // quadrado da soma
    var quadradoDaSoma = 0;  // declaração da variável que receberá a soma dos valores e que posteriormente será elevada ao quadrado
    for (let j = this.numero; j > 0 ; j--){  // laço for será executado no intervalo de numero a 1 (forma decrescente)
      quadradoDaSoma = quadradoDaSoma + j; // variavel quadradoDaSoma incrementada com valor de j em cada loop
    }
    quadradoDaSoma = quadradoDaSoma ** 2;  // por fim, somados os valores do intervalo de 1 até n (numero) na variável quadradoDaSoma, ela é elevada ao quadrado
    return quadradoDaSoma;  // É retornado o valor resultante do quadrado da soma dos valores do intervalo de 1 até n (numero)
  }

  get difference() {  //diferença dos quadrados
    var diferençaDeQuadrados = 0;  // declaração da variável que receberá a diferença dos quadrados
    diferençaDeQuadrados =  this.squareOfSum - this.sumOfSquares; // diferençaDeQuadrados recebe a diferença entre os resultados das funções squareOfSum e sumOfSquares (não é necessário indicar um número para as funções pois o número é lido em constructor, antes de qualquer função ser executada)
    return diferençaDeQuadrados;  // É retornado o valor resultante da diferença dos quadrados de um valor n (numero)
  }
}