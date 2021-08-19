//
// This is the 'Two fer' exercise.
//

export const twoFer = (name) => {
  if (name == undefined || name === ""){
    return 'One for you, one for me.';
   } else{
    return 'One for ' + name + ', one for me.';
  }
}
