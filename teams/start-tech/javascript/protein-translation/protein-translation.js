//
// This is the 'Protein Translation' exercise.
//

const mapaProt = {  // declaração do objeto mapaProt
  AUG: 'Methionine',
  UUU: 'Phenylalanine',
  UUC: 'Phenylalanine',
  UUA: "Leucine",
  UUG: "Leucine",
  UCU: 'Serine', 
  UCC: 'Serine', 
  UCA: 'Serine', 
  UCG: 'Serine',
  UAU: 'Tyrosine', 
  UAC: 'Tyrosine',
  UGU: 'Cysteine',
  UGC: 'Cysteine',
  UGG: 'Tryptophan',
  UAA: 'STOP',
  UAG: 'STOP',
  UGA: 'STOP'
};

export const translate = (codigoRNA) => {  //recebe codigoRNA no formato string
  const traducao = [];  // declaracao do Array que receberá a tradução do RNA / nome das proteinas

  if (codigoRNA === undefined){  // caso o conteúdo de codigoRNA seja undefined (string esteja vazia)
    return traducao;  // retorna o array tradução no seu formato inicial, vazio, e encerra código
  }

  const sequencias = codigoRNA.split(/(\w{3})/).filter(seq => seq);  // armazena em sequencias stringRNA convertida em Array através da quebra dos seus elementos em palavras de 3 componenetes. Comando filter garante que só serão armazenadas palvras e descarta " "
  
    for (let i=0; i<sequencias.length; i++){  // laço for será executado de acordo com o tamanho do array sequencias, ou seja, de acordo com número de termos do array
      if (mapaProt[sequencias[i]] === undefined){  // caso a sequencia de RNA em análise não tenha sido mapeada como proteina, sendo undefined, não existente
        throw "Invalid codon";  // Envia erro e encerra código
      }else if(mapaProt[sequencias[i]] === 'STOP'){  // caso a sequencia de RNA em análise esteja mapeada como uma sequencia de parada (STOP)
        return traducao;  // a tradução é encerrada e o resultado encontrado até o momento é retornado, e o código é encerrado
      }else{  // se nenhuma das condições anteriores for atendida significa que a sequencia de RNA é válida
      traducao.push(mapaProt[sequencias[i]]);  // array traducao recebe recebe a proteína equivalente a sequencia RNA em questão
      }
    }
  
  return traducao;  // caso nenhuma condição de parada anterior tenha sido atendida ao finalizar a tradução da sequencia RNA, o array de tradução é retornado com o nome das proteínas

};
