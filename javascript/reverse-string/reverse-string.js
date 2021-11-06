export function reverseString(data){
  let resultado = data.split('').reverse().join('');
  //os métodos split() e join() não alteram a string original, por isso há necessidade de armazenar os retornos dos métodos em uma nova variável
  //split(''): separa elemento por elemento da string fazendo cada um se tornar um item de um novo array
  //reverse(): inverte a ordem dos itens de um array (muda o array original)
  //join(''): junta todos os itens de um array, sem separadores, em uma nova string

  return resultado;
}