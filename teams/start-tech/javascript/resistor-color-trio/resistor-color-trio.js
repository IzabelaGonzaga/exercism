//
// This is the 'Resistor Color Trio' exercise. 
//

export class ResistorColorTrio {
  resistencia = 0;  // variavel que irá armazenar o valor da resistencia
 
  constructor(...cores) {
    this.sequencia = cores [0];  // variável sequência recebe as cores do resistor
    const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];  // declaração do array das cores e inserção de itens
    
    if (COLORS.includes(this.sequencia[0]) && COLORS.includes(this.sequencia[1]) && COLORS.includes(this.sequencia[2])){  // caso as cores fornecidas existam no array das cores de referência, entra na condicional
      this.resistencia = ((COLORS.indexOf(this.sequencia[0]) * 10) + COLORS.indexOf(this.sequencia[1])) * (10 ** COLORS.indexOf(this.sequencia[2])); // realiza a conversão para valor numérico através da fórmula: [(cor1 * 10) + cor2]*(10^cor3), sendo que cada cor corresponde a um valor compatével com o index (numérico) dela no array.
    } else {  // caso a cor fornecida não esteja no array
      throw "/invalid color/";  // retorna mensagem de erro e encerra execução
    }

  }

  get label() {  // caso a conversão pro valor numérico seja feita, a execução continua em label
    if (this.resistencia < 1000){  // caso a resistência seja menor que 1x10^3 
      return "Resistor value: " + this.resistencia + " ohms";  // a resistência é retornada no formato de ohms, sem manipulação no valor
    } else if (this.resistencia >= 1000 && this.resistencia < 1000000){ // caso a resistência seja maior que 1x10^3 e menor que 1x10^6
      return "Resistor value: " + (this.resistencia/1000) + " kiloohms";  // a resistência é retornada no formato de kiloohms, e o valor é dividido por 1000
    } else if (this.resistencia >= 1000000 && this.resistencia < 1000000000){  // caso a resistência seja maior que 1x10^6 e menor que 1x10^9
      return "Resistor value: " + (this.resistencia/1000000) + " megaohms";  // a resistência é retornada no formato de megaohms, e o valor é dividido por 1000000
    } else if (this.resistencia >= 1000000000 && this.resistencia < 1000000000000){  // caso a resistência seja maior que 1x10^9 e menor que 1x10^12
      return "Resistor value: " + (this.resistencia/1000000000) + " gigaohms";  // a resistência é retornada no formato de gigaohms, e o valor é dividido por 1000000000
    }

  }

}