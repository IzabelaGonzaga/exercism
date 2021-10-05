export function isPangram(frase: string): boolean {
  const alfabeto = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

  for (let i = 0; i < alfabeto.length; i++) {
    if (!(frase.toLowerCase().includes(alfabeto[i]))) return false;  //caso não ache a letra em questão na frase retorna false e encerra a função
  }

  return true;  //caso toda a verificação tenha sido feita e a frase contenha todas as letras do alfabeto retorna true e encerra a função
}


/* Outra forma:
export function isPangram(frase: string): boolean {
  const filtrado = frase.toUpperCase().split('').filter(char => char >= 'A' && char <= 'Z');  //filtra todas as letras presentes na frase salvando em um array
  const setFiltrado = new Set(filtrado);  //utiliza função set para salvar letras em outra variável removendo as redundâncias (set salva apenas um valor único de cada tipo em um objeto)
  return setFiltrado.size == 26;  //verifica se a variável com as letras filtradas tem 26 letras, que é a quantidade de letras do alfabeto
} */
