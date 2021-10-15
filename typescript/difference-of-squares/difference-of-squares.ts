export class Squares {
  private readonly valores: number[] = []; //declaração array de números

  constructor(count: number) {
    for (let i = 1; i <= count; i++) {
      this.valores.push(i);  //forma array com valores de 1 até count
    }
  }

  get sumOfSquares(): number {  //soma dos quadrados
    return this.valores.reduce((soma,x) => soma += x**2);  //reduce executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno
  }                                                        //ex. de sintaxe: array.reduce((acumulador, valorAtual) => operação)

  get squareOfSum(): number {  //quadrado da soma
    return (this.valores.reduce((soma,x) => soma += x))**2;  //reduce não altera o array referência pois o resultado da operação é deixado no acumulador (nesse caso soma)
  }

  get difference(): number {
    return this.squareOfSum - this.sumOfSquares;
  }
}
