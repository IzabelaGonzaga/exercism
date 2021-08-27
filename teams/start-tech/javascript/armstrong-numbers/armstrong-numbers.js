//
// This is the 'Armstrong Numbers' exercise.
// Um número de Armstrong é um número que é igual a soma de seus próprios dígitos cada um elevado a quantidade de dígitos do número.
// Exemplo: 153 é um número de Armstrong, porque: 153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
//

export const isArmstrongNumber = (number) => {
  const numero = number.toString();  // variavel numero recebere o number de entrada e converte de formato número para string
  let soma = 0;  

  for (let i=0; i<numero.length; i++){  // laço for será executado de acordo com a quatidade de dígitos do número
    soma += numero[i] ** (numero.length);  // variável soma recebe o resultado do dígito em questão elevado a quantidade total de dígitos do número
  }

  return (soma===number); // retorna true ou false de acordo com o resultado da verificação, se a soma encontrada é igual ao número fornecido inicialmente ou não
};
