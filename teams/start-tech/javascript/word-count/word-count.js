//
// This is the 'Word Count' exercise. 
//

export const countWords = (frase) => {
  const palavras = frase.toLowerCase().match(/(\w+)('\w+)?/g); // array
  const contador = {}; // objeto

  for (let i =0; i<palavras.length; i++){
    if (contador[palavras[i]] === undefined){
      contador[palavras[i]] = 1;
    }else{
      contador[palavras[i]]++;
    }
  }

  return contador;

};
