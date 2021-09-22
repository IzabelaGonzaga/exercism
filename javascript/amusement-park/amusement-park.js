/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Creates a new visitor.
 *
 * @param {string} name
 * @param {number} age
 * @param {string} ticketId
 * @returns {Visitor} the visitor that was created
 */
export function createVisitor(name, age, ticketId) {
  const objVisitor = { name,  //nome da variável será a chave e o valor o conteúdo da chave
    age,
    ticketId,
  };
  return objVisitor;
}

/**
 * Revokes a ticket for a visitor.
 *
 * @param {Visitor} visitor the visitor with an active ticket
 * @returns {Visitor} the visitor without a ticket
 */
export function revokeTicket(visitor) {
  visitor.ticketId = null;
  return visitor;
}

/**
 * Determines the status a ticket has in the ticket tracking object.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function ticketStatus(tickets, ticketId) {
  if (tickets[ticketId] === undefined) return "unknown ticket id";  //casos em que o ticket não existe
  if (tickets[ticketId] === null) return "not sold";  //casos em que o ticket existe mas não tem valor atribuido (não foi comprado)

  return "sold to " + tickets[ticketId];    //se nenhum if anterior foi atendido o ticket existe e tem valor atribuido (foi comprado)
}

/**
 * Determines the status a ticket has in the ticket tracking object
 * and returns a simplified status message.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function simpleTicketStatus(tickets, ticketId) {
  //nullish coalescing operator
  return tickets[ticketId] = tickets[ticketId] ?? "invalid ticket !!!";  // caso a variável seja nula ou undefined retorna a mensagem, caso não seja retorna a própria variável
}

/**
 * Determines the version of the GTC that was signed by the visitor.
 *
 * @param {VisitorWithGtc} visitor
 * @returns {string | undefined} version
 */
export function gtcVersion(visitor) {
  //optional chaining operator
  //verificar se tem chave version, contudo apenas se tiver gtc, se a chave gtc não existir já retorna undefined
  return visitor.gtc?.version;  //caso chave gtc exista e não exista version será retornado undefined
}
