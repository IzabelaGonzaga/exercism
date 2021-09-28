/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Get the first card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the first card in the deck
 */
export function getFirstCard(deck) {
  let [primeiraCarta] = deck;  //o primeiro item do array deck será atribuido a variável primeiraCarta (que será tipo número pelo primeiro item do array ser um número)
  return primeiraCarta;
}

/**
 * Get the second card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the second card in the deck
 */
export function getSecondCard(deck) {
  let [,segundaCarta] = deck;  //pega o segundo item do array deck, sendo que a vígula indica que antes da variavel segundaCarta tem 1 item no array deck
  return segundaCarta;
}

/**
 * Switch the position of the first two cards in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card[]} new deck with reordered cards
 */
export function swapTopTwoCards(deck) {
  let [primeiraCarta, segundaCarta, ...resto] = deck; //primeiraCarta pega o primeiro item do array deck, segundaCarta pega o segundo item do array deck, e resto acumula os demais itens que possam conter ou não no array deck
  return [segundaCarta, primeiraCarta, ...resto]; //ao atribuir com pontinho fica tudo um array só, se tivesse o resto sem pontinhos seria um array dentro do outro. Nesse caso retorna a representação de um array em que a primeira e segunda carta de deck trocam de posição
}

/**
 * Put the top card of the given deck into a separate discard pile
 *
 * @param {Card[]} deck
 *
 * @returns {[Card, Card[]]} the top card of the given
 * deck and a new deck containing all the other cards
 */
export function discardTopCard(deck) {
  let [primeiraCarta, ...resto] = deck; //primeiraCarta pega o primeiro item do array deck, e resto acumula os demais itens que possam conter ou não no array deck
  return [primeiraCarta, resto]; //como resto não tem pontinhos retorna a representação de um array com o primeiro item a variavel primeiraCarta e o segundo item um outro array com os itens do array resto
}

/** @type Card[] **/
const FACE_CARDS = ['jack', 'queen', 'king'];

/**
 * Insert face cards into the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card[]} new deck where the second,
 * third, and fourth cards are the face cards
 */
export function insertFaceCards(deck) {
  let [primeiraCarta, ...resto] = deck; //divide o array deck em duas variáveis, uma com o primeiro item do array e outra com o resto dos itens do array
  return [primeiraCarta, ...FACE_CARDS, ...resto]; //retorna a representação de um array com a primeiraCarta do array deck, os itens do array FACE_CARDS e o resto dos itens do array deck (nessa sequência)
}
