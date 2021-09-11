// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

import { SourceMap } from "module";

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let soma=0;
  for (let i=0;i<birdsPerDay.length;i++){
    soma+=birdsPerDay[i];
  }
  return soma;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 
Para determinar o início e fim do laço for de acordo com a semana desejada:
 *primeiro dia de uma semana, de acordo com índice do array, considerando uma semana com 7 dias
 *início = (semanaX-1)*7 = (7*semanaX)-7
 *último dia de uma semana, de acordo com índice do array, considerando a semana com 7 dias
 *assim sendo soma-se 6 ao primeiro dia, que já está em conta
 *final = início+6 = (7*semanaX)-7+6 = (7*semanaX)-1
*/
export function birdsInWeek(birdsPerDay, week) {
  let somaDaSemana=0;
  for (let i = (7*week)-7; i <= (7*week)-1; i++){
    somaDaSemana+=birdsPerDay[i];
  }
  return somaDaSemana;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 * 
 * Nesse caso é corrigido o número de passos um dia sim e outro não, aumentando mais 1
 * considerando o primeiro dia como o primeiro a ser corrigido, e com array começando em 0
 * será adicionado 1 no elemento do array na posição de índice zero, e em todos os demais elementos em posições com índices de números pares (de 2 em 2)
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length ; i+=2){
    birdsPerDay[i]++;
  }
  return birdsPerDay;
}
