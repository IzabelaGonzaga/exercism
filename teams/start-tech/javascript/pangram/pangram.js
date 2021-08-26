//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (frase) => {
  if (frase === '') return false;  // caso a string frase esteja vazia retorna falso, pois não contém nenhuma letra do alfabeto, e para execução 

  const letras = frase.toLowerCase().match(/[a-z]/g);  // o array letras recebe apenas as letras de a à z (comando .match()), no formato minúsculo (.toLowerCase()), de frase 
  
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];  // declaração do array alfabeto com todas as letras do alfabeto

  for (let i=0; i<alfabeto.length; i++){  // o laço for será executado para todas as letras do alfabeto
    if (!letras.includes(alfabeto[i])) return false; // caso o array letras não possua a letra do alfabeto em análise, retorna falso e para a execução, pois nesse caso a frase não é um pangrama
  }

  return true;  // com toda a verificação feita com sucesso (o array letras possui todas as letras do array alfabeto), retorna true e para a execução, pois a frase é um pangrama
}