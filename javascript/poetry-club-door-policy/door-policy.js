// @ts-check
//
// ☝🏽 The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion on the web
// and supported IDEs when implementing this exercise. You don't need to
// understand types, JSDoc, or TypeScript in order to complete this JavaScript
// exercise, and can completely ignore this comment block and directive.
//
//
// Good luck with that door policy!

/**
 * Respond with the correct character, given the blurb, if this were said at
 * the front door.
 *
 * @param {string} blurb
 * @returns {string}
 */

export function frontDoorResponse(blurb) {
  return blurb[0];  //retorna a primeira letra de cada frase
}

/**
 * Respond with the correct character, given the blurb, if this were said at
 * the back door.
 *
 * @param {string} blurb
 * @returns {string}
 */
export function backDoorResponse(blurb) {
  blurb = blurb.trim();  //o método trim() remove os espaços em branco do início e/ou fim de um texto.
  return blurb[(blurb.length)-1];  //retorna a última letra de cada frase (como o índice de uma string começa em zero, o último índice de uma string corresponde ao seu total de caracteres menos 1)
}

/**
 * Capitalizes a word, meaning only the first character is a capital, and the
 * remaining letters are lower case.
 *
 * @param {string} word
 * @returns {string}
 */
function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();  //retorna a primeira letra da string word maiúscula e as demais minúsculas
}

/**
 * Give the password for the front-door, given the responses.
 *
 * @param {string} responses the responses
 * @returns {string} the password
 */
export function frontDoorPassword(responses) {
  return capitalize(responses);
}

/**
 * Give the password for the back-door, given the responses.
 *
 * @param {string} responses the responses
 * @returns {string} the password
 */
export function backDoorPassword(responses) {
  return capitalize(responses) + ", please";
}
