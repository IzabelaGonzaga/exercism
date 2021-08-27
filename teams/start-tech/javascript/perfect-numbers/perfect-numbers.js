//
// This is the 'Perfect Numbers' exercise. 
//

export const classify = (number) => {
  if (number <= 0) throw new Error('Classification is only possible for natural numbers.');  // se o número for menor igual a zero retorna erro e encerra execução
  let soma = 0;  // variável soma que armazenará a soma de alíquotas, que é definida como a soma dos fatores de um número que não inclui o número em si

  for (let i=1; i < number; i++){ // laço for começará em 1 (pois número não é divisível por zero) e irá até 1 valor antes de número
    if (number%i === 0) soma += i;  // se o resto da divisão do número por i é zero (numero divisível por i), o valor de i é acumulado em soma
  }

  if (soma === number) return 'perfect';  // se a soma de alíquota = número, o número é perfeito
  if (soma > number) return 'abundant';  // se a soma de alíquota > número, o número é abundante
  if (soma < number) return 'deficient';  // se a soma de alíquota < número, o número é deficiente

};
