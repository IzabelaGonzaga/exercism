//
// This is the 'Raindrops' exercise.
// Um fator é um número que se divide uniformemente em outro número, não deixando nenhum restante.
//

export const convert = (number) => {
  let sound = "";  // string sound irá receber os resultados da conversão de um número em uma sequência que contém sons de gota de chuva correspondentes a certos fatores potenciais
  
  if(number%3 === 0) sound+="Pling";  // se number tem 3 como fator, adicionar 'Pling' à sound
  if(number%5 === 0) sound+="Plang";  // se number tem 5 como fator, adicionar 'Plang' à sound
  if(number%7 === 0) sound+="Plong";  // se number tem 7 como fator, adicionar 'Plong' à sound
  if(number%3 !== 0 && number%5 !== 0 && number%7 !== 0) sound+=number;  // se number não tem 3, 5 ou 7 como fator, o resultado deve ser os dígitos do número
  
  return sound;  // retorna o sound encontrado

};
