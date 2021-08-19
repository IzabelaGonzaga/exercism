//
// This is the 'Gigasecond' exercise.
//

export const gigasecond = (dataRefencia) => {
  var dataMilisegundos = dataRefencia.getTime();              // Data reescrita em milisegundos através da função getTime()
  var datacomGigasegundos = dataMilisegundos + (1e9 * 1000);  // Data somada a 1 giga segundo (com gigaseg escrito em miliseg)

    return new Date (datacomGigasegundos);                    // Retornado a data encontrada em formato padrão com auxílio da função new Date()
};
