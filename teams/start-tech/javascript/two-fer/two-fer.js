//
// This is the 'Two fer' exercise.
//

export const twoFer = (name) => {
  if (typeof name === 'undefined'){
    return 'One for you, one for me.';
   } else{
    return 'One for ' + name + ', one for me.';
  }
}
