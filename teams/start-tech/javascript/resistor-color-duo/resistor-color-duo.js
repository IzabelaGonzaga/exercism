//
// This is the 'Resistor Color Duo' exercise. 
//

export const decodedValue = (cores) => {
  const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];  // declaração do array e inserção de itens
  return ((COLORS.indexOf(cores[0]) * 10) + COLORS.indexOf(cores[1]));  // comando index.Of() retorna o valor do índice da posição que está cores[n] no array COLORS (que corresponde ao valor atribuido a cada cor no esquema de codificação). Assim, sabendo que a primeira cor corresponde a dezena e a segunda a unidade podemos obter o valor do resistor com a simples conta: (valor_cor_dezena x 10) + valor_cor_unidade
};
