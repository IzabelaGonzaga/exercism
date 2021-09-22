// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  return parseFloat(array1.join("")) + parseFloat (array2.join(""));
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean}  whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let valueReverse = parseFloat(value.toString().split("").reverse().join("")); //transformando variável número em string, depois em array (cada numero um elemento), revertendo a ordem do array, transformando array em string, e o parseFloat transformando a string resultante em número
  return value === valueReverse;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (!input) return "Required field";  //null, undefined e string vazia em booleano são false
  if (isNaN(+input) || parseFloat(input) === 0) return "Must be a number besides 0";  //parseFloat(numero) equivale a +numero, ambos transformas a variável em um valor numérico

  return "";
}
