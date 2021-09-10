// @ts-check

/**
 * Retrieve card from cards array at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 *
 * @returns {number} the card
 */
export function getItem(cards, position) {
  return cards[position];  //retorna o elemento do array cards da posição desejada
}

/**
 * Exchange card with replacementCard at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 * @param {number} replacementCard
 *
 * @returns {number[]} the cards with the change applied
 */
export function setItem(cards, position, replacementCard) {
  cards[position]=replacementCard;  //atribui a position do array card novo valor de replacementCard
  return cards;  //retorna o array atualizado
}

/**
 * Insert newCard at the end of the cards array
 *
 * @param {number[]} cards
 * @param {number} newCard
 *
 * @returns {number[]} the cards with the newCard applied
 */
export function insertItemAtTop(cards, newCard) {
  cards.push(newCard);  //adiciona newCard ao fim do array cards
  return cards;  //retorna o array atualizado
}

/**
 * Remove the card at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 *
 * @returns {number[]} the cards without the removed card
 */
export function removeItem(cards, position) {
  cards.splice(position,1);  //remove o elemento da position do array card 
  return cards;  //retorna o array atualizado
}

/**
 * Remove card from the end of the cards array
 *
 * @param {number[]} cards
 *
 * @returns {number[]} the cards without the removed card
 */
export function removeItemFromTop(cards) {
  cards.pop();  //remove o ultimo elemento do array cards
  return cards;  //retorna o array atualizado
}

/**
 * Insert newCard at beginning of the cards array
 *
 * @param {number[]} cards
 * @param {number} newCard
 *
 * @returns {number[]} the cards including the new card
 */
export function insertItemAtBottom(cards, newCard) {
  cards.unshift(newCard);  //adiciona newCard ao início do array cards
  return cards;  //retorna o array atualizado
}

/**
 * Remove card from the beginning of the cards cards
 *
 * @param {number[]} cards
 *
 * @returns {number[]} the cards without the removed card
 */
export function removeItemAtBottom(cards) {
  cards.shift();  //remove o primeiro elemento do array cards
  return cards;  //retorna o array atualizado
}

/**
 * Compare the number of cards with the given stackSize
 *
 * @param {number[]} cards
 * @param {number} stackSize
 *
 * @returns {boolean} true if there are exactly stackSize number of cards, false otherwise
 */
export function checkSizeOfStack(cards, stackSize) {
  return cards.length === stackSize;  //retorna se a quantidade de elementos do array cards é igual ao valor de StackSize (true or false)
}
