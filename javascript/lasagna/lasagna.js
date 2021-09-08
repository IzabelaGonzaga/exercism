const preparationMinutesPerLayer = 2;  //tempo de preparo por camada
export const EXPECTED_MINUTES_IN_OVEN = 40;  //para uma variável ser lida no teste devo dar export
//constante que retorna quantos minutos a lasanha deve estar no forno

// função que retorna quantos minutos a lasanha ainda tem que permanecer no forno, com base no tempo que a lasanha deve ficar no forno em minutos 
export function remainingMinutesInOven(actualMinutesInOven) {
  return (EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven);  //tempo restante no forno é o tempo de forno padrão menos a quanto tempo a lasanha já está no forno
}

// função que  retorna quantos minutos você passou preparando a lasanha, assumindo que cada camada leva 2 minutos para se preparar
export function preparationTimeInMinutes(numberOfLayers) {
  return (numberOfLayers * preparationMinutesPerLayer);  //tempo de preparo é dado pelo número de camadas vezes o tempo de preparo de uma camada
}


// função deve retornar quantos minutos no total você trabalhou na cozimento da lasanha, que é a soma do tempo de preparação em minutos, e o tempo em minutos que a lasanha passou no forno no momento
export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  return (preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven);  //tempo de cozimento é a soma do retorno da função de tempo de preparação mais quanto tempo a lasanha está no forno
}
