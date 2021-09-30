export function twoFer(name: string = "you"): string {  //caso não seja fornecido parâmetro, ou a variável não tenha valor atribuido, a variável recebe "you"
  return "One for " + name + ", one for me.";
}


/*para casos em que não seja definido conteúdo do parâmetro, o caso deve ser tratado
opção:

  export function twoFer(name?: string): string {  
    if (!name) return "One for you, one for me."
    return "One for " + name + ", one for me.";
  }

*/


/*para casos em que não seja definido conteúdo do parâmetro, o caso deve ser tratado
opção com retorno mais simples:

  export function twoFer(name?: string): string {  
    return `One for ${name ?? 'you'}, one for me.`;
  }
  
*/
