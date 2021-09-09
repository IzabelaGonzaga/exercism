// @ts-check
//
// ☝🏽 The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion on the web
// and supported IDEs when implementing this exercise. You don't need to
// understand types, JSDoc, or TypeScript in order to complete this JavaScript
// exercise, and can completely ignore this comment block and directive.

//
// Get those rates calculated!

//The daily rate is 8 times the hourly rate.
//A month has 22 billable days.

/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
export function dayRate(ratePerHour) {
  return ratePerHour*8;
}

/**
 * Calculates the rate per month
 * ratePerMonth = ratePerHour * 8 * 22 * discount, com discount = 1 - percentage
 * 
 * @param {number} ratePerHour
 * @param {number} discount for example 20% written as 0.2
 * @returns {number} the rounded up monthly rate
 */
export function monthRate(ratePerHour, discount) {
  return Math.ceil(applyDiscount((dayRate(ratePerHour)*22),discount));  //Math.ceil arrredonda para o próximo maior inteiro
}

/**
 * Calculates the number of days in a budget, rounded down
 * daysInABudget = budget / ratePerHour * 8 * discount, com discount = 1 - percentage
 *
 * @param {number} budget the total budget
 * @param {number} ratePerHour the rate per hour
 * @param {number} discount to apply, example 20% written as 0.2
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour, discount) {
  return Math.floor(budget/(applyDiscount(dayRate(ratePerHour),discount)));  //Math.floor retorna um inteiro menor ou igual ao número dado
}

/**
 * Applies a discount to the value
 * valueDiscounted = value * discount, com discount = 1 - percentage
 * 
 * @param {number} value
 * @param {number} percentage for example 20% written as 0.2
 * @returns {number} the discounted value
 */
function applyDiscount(value, percentage) {
  return value * (1 - percentage);  //calcula desconto que é valor menos o percentual a ser pago, que é 100% - x%
}
