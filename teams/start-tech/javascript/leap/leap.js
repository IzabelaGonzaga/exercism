//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isLeap = (anoTeste) => {
  if ( (anoTeste%4 === 0 && anoTeste%100 != 0) || (anoTeste%400 === 0)){
    return true;
  } else{
    return false;
  }
};
