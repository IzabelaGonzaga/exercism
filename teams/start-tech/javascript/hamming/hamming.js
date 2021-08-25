//
// This is 'Hamming' exercise. 
//

export const compute = (fioEsquerdo, fioDireito) => {  // função recebe dois fios de DNA para análise

  if (fioEsquerdo === '' && fioDireito === ''){  // verifica se os fios recebidos estão vazios
    return 0;  // nesse caso retorna 0 e encerra função

  } else if (fioEsquerdo === ''){  // verifica se o fio esquerdo (primeira variável) está vazia
    throw "left strand must not be empty";  // nesse cado retorna mensagem de erro e encerra função

  } else if (fioDireito === ''){  // verifica se o fio direito (segunda variável) está vazia
    throw "right strand must not be empty";  // nesse cado retorna mensagem de erro e encerra função

  } else if (fioEsquerdo.length !== fioDireito.length){  // verifica se as strings fornecidas tem tamanhos diferentes
    throw "left and right strands must be of equal length";  // nesse cado retorna mensagem de erro e encerra função

  } else {  // caso nenhuma das condições sejam atendidas significa que os dados fornecidos são válidos para análise, e então é dado início a verificação
    let hamming = 0;  // varialvel que acumulará a quantia de hamming
    for (let i=0; i<fioEsquerdo.length; i++){  //laço for que permitirá analisar cada índice da string
      if (fioEsquerdo[i] !== fioDireito[i]){  // se o o caractere do fio esquerdo na posição i for diferente do caractere do fio direito na posição i
        hamming++;  // variável hamming soma +1
      }
    }
    return hamming;  // ao fim do laço for retorna o valor de hamming

  }

};