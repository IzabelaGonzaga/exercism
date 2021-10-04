enum DnaBasis {  //conjunto de elementos pré-definidos para uso na função toRna()
  G = 'C',
  C = 'G',
  T = 'A',
  A = 'U',
}

type DnaBase = keyof typeof DnaBasis;  //define DnaBase como um tipo de chave de DnaBasis

export function toRna(dna: string): string {  //função recebe uma string de nome dna e retorna uma string
  let rna: string = "";  //declara uma string chamada rna vazia que armazenará o resultado da tradução do dna

  for (let elemento of dna) {  //laço for que dependerá do tamanho da string de entrada e permitirá a leitura de um elemento da string por vez
    if(!(elemento in DnaBasis)) throw Error('Invalid input DNA.');  //verificar se a chave em questão pertence a DnaBasis (operador in), caso não retorna um erro e encerra a função
    rna += DnaBasis[<DnaBase>elemento];  //string rna recebe o elemento equivalente a chave elemento, do tipo DnaBase, contido em DnaBasis 
  }

  return rna;  //ao fim da leitura da string dna e tradução, caso todos os elementos tenham sido traduzidos, retorna a string rna obtida
}


