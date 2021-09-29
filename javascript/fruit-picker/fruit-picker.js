/// <reference path="./global.d.ts" />
//
// @ts-check
//
// The lines above enable type checking for this file. Various IDEs interpret
// the @ts-check and reference directives. Together, they give you helpful
// autocompletion when implementing this exercise. You don't need to understand
// them in order to use it.
//
// In your own projects, files, and code, you can play with @ts-check as well.

import { checkStatus, checkInventory } from './grocer';

/**
 * Returns the service status as a boolean value
 * @return {boolean}
 */
export function isServiceOnline() {
  let resultado = checkStatus (verificar);  //crio uma variavel pra guardar meu resultado booleano, chamo checkstatus e seu callback

  function verificar (status){  //crio função pra verificar e recebo a string de grocer.js
    return status === "ONLINE";  //verifica status do serviço
  }

  return resultado;  //retorna resultado das funções encadeadas
}

/**
 * Pick a fruit using the checkInventory API
 *
 * @param {string} variety
 * @param {number} quantity
 * @param {InventoryCallback} callback
 * @return {AvailabilityAction} the result from checkInventory
 */
export function pickFruit(variety, quantity, callback) {
  return checkInventory ({variety, quantity}, callback);
}

/**
 * This is a callback function to be passed to the checkInventory API
 * handles the next step once the inventory is known
 * @param {string | null} err
 * @param {boolean} isAvailable
 * @return {AvailabilityAction} whether the fruit was purchased 'PURCHASE' or 'NOOP'
 */
export function purchaseInventoryIfAvailable(err, isAvailable) {
  if (err) throw err;

  if(isAvailable) return 'PURCHASE';
  else return 'NOOP';
}

/**
 * Pick a fruit, and if it is available, purchase it
 *
 * @param {string} variety
 * @param {number} quantity
 * @return {AvailabilityAction} whether the fruit was purchased 'PURCHASE' or 'NOOP'
 */
export function pickAndPurchaseFruit(variety, quantity) {
  return pickFruit (variety, quantity, purchaseInventoryIfAvailable);
}
