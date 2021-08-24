/**
 * You can use the bigint type and BigInt global object to support numbers below
 * Number.MIN_SAFE_INTEGER and above NUMBER.MAX_SAFE_INTEGER.
 **/

// This is the 'Grains' exercise. 

//MODO 1 
/*export const square = (square) => {  // quantos grãos estão em um determinado quadrado
  let squareXGrain = BigInt(1);  // declaração da variável que irá armazenar a quantidade de grãos em um determinado quadrado, ela será BigInt, e já começará com 1 grão, que é o da posição 1
  if(square >= 1 && square <= 64){  // se o quadrado for entre 1 e 64 entra no laço, pois essa é a quantidade de quadrados em um tabuleiro de xadrez, entra no bloco
    for (let i=1; i<square; i++){  // início do laço for, a quantidade de ciclos será sempre de n-1
      squareXGrain = squareXGrain * 2n;  // variável squareXGrain em cada loop passa a ser o dobro da quantidade do loop anterior
    }
  } else{  // caso o número do quadrado fornecido não esteja no intervalo de 1 a 64, entra no bloco
    throw "square must be between 1 and 64";  // envia mensagem de erro
  }
  return squareXGrain;  // retorna o valor de grãos em um determinado quadrado

};

export const total = () => {  // o número total de grãos no tabuleiro de xadrez
  let totalGrains = BigInt(1);  //declaração da variável que irá armazenar a quantidade de grãos no tabuleiro, ela será BigInt, e já começará com 1 grão, que é o da posição 1
  for (let i=0; i<64; i++){ // início do laço for, a quantidade de ciclos será de 64. No quadrado 64 terão (2^63) grãos, porém somando todos os grãos do quadrado 1 a 63 teremos uma quantidade de grãos equivalente a ((2^63)-1), sendo o total de grãos no tabuleiro a soma de: (2^63) + ((2^63)-1). Como 2^64 = 2 x (2^63), podemos reescrever essa soma como: (2^64)-1 
    totalGrains = totalGrains * 2n; // variável totalGrains em cada loop passa a ser o dobro da quantidade do loop anterior
  }
  return (totalGrains - 1n); // por fim é retornado o número total de grãos no tabuleiro de xadrez [como a soma é: (2^64)-1, tirou-se o 1 nessa linha que é a próxima após o laço da soma]
 
}; */


//MODO 2
export const square = (square) => {  // quantos grãos estão em um determinado quadrado
  if(square >= 1 && square <= 64){  // se o quadrado for entre 1 e 64 entra no laço, pois essa é a quantidade de quadrados em um tabuleiro de xadrez, entra no bloco
    var squareXGrain = BigInt (2 ** (square - 1));  // o número de grãos em um quadrado do tabuleiro é dados por 2^(nº quadrado do tabuleiro - 1), logo a variável squareXGrain recebe o valor dessa operação no formato BigInt
  } else{  // caso o número do quadrado fornecido não esteja no intervalo de 1 a 64, entra no bloco
    throw "square must be between 1 and 64";  // envia mensagem de erro
  }
  return squareXGrain; // retorna o valor de grãos em um determinado quadrado

};

export const total = () => {  // o número total de grãos no tabuleiro de xadrez
  let totalGrains = BigInt(0);  //declaração da variável que irá armazenar a quantidade de grãos no tabuleiro, ela será BigInt
  for (let i=0; i<64; i++){ // início do laço for, a quantidade de ciclos será de 64, com i assumindo valores de 0 a 63, já que quantidade de grãos em um quadrado é dada por 2^(nº quadrado do tabuleiro - 1). Como queremos a soma da quantidade de grãos em todos tabuleiro será feita uma soma da quantidade de grãos em cada quadrado do tabuleiro com auxílio do laço for
    totalGrains = totalGrains + BigInt(2 ** i); // variável totalGrains em cada loop soma a seu conteúdo a quantia de grãos do tabuleiro em questão
  }
  return totalGrains; // por fim é retornado o número total de grãos no tabuleiro de xadrez
 
}; 