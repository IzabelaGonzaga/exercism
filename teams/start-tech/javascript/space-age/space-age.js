//
// This is the 'Space Age' exercise. 
// The Iterstellar code.
//

export const age = (planetaOrigem, idadeSegPlanetaOrigem) => {
  switch(planetaOrigem){
    case 'mercury':
      var idadeSegundosTerra = idadeSegPlanetaOrigem/0.2408467;  //Calcula idade em segundos para o referencial terrestre dividindo a idade em segundos do planeta origem pelo período orbital equivalente em anos terrestres
      break;
    case 'venus':
      var idadeSegundosTerra =idadeSegPlanetaOrigem/0.61519726;
      break;
    case 'earth':
      var idadeSegundosTerra =idadeSegPlanetaOrigem/1;
      break;
    case 'mars':
      var idadeSegundosTerra =idadeSegPlanetaOrigem/1.8808158;
      break;
    case 'jupiter':
      var idadeSegundosTerra =idadeSegPlanetaOrigem/11.862615;
      break;
    case 'saturn':
      var idadeSegundosTerra =idadeSegPlanetaOrigem/29.447498;
      break;
    case 'uranus':
      var idadeSegundosTerra =idadeSegPlanetaOrigem/84.016846;
      break;
    case 'neptune':
      var idadeSegundosTerra =idadeSegPlanetaOrigem/164.79132;
      break;
    default:            
     return -1;        //Retornando um número por questões de boa prática (mesmo formato dos casos positivos) para indicar erro. Esse return já fecha a função e não faz o cálculo caso entre na opção default
  }

  var idadeAnosTerra=parseFloat((idadeSegundosTerra/31557600).toFixed(2)); //Idade é calculada em anos terrestres através da divisão da idade em segundos fornecida (convertida em seg. terrestres) pelo equivalente em seguntos a 1 ano terrestre
  return idadeAnosTerra;
};

/* O toFixed estabelece que o valor obtido terá duas casas decimais, porém converte o resultado para string,
por isso é utilizado o parseFloat para voltar o resultado para número*/ 
