/// <reference path="./global.d.ts" />
// @ts-check


//The timer will never show a value below 0.
export function cookingStatus(remainingTime){
    if (remainingTime === 0) return 'Lasagna is done.';
    if (remainingTime > 0 ) return 'Not done, please wait.';

    return 'You forgot to set the timer.';
}


export function preparationTime(layers, time=2){  //caso time não seja fornecido ao chamar a função, deve ser atribuido o valor 2 a variável (dois minutos por camada na preparação)
    return layers.length * time;
}


export function quantities(layers){
    let ingredients = {
        noodles: 0,
        sauce: 0,
    };

    for (let i=0;i<layers.length;i++){
        if(layers[i] === "noodles") ingredients.noodles += 50;
        if(layers[i] === "sauce") ingredients.sauce += 0.2;
    }

    return ingredients;
}


//myList pode ser alterado, mas friendsList não pode ser alterado
//the function should not return anything -> undefined
export function addSecretIngredient(friendsList, myList){
    myList.push(friendsList[friendsList.length - 1]);
}


//The recipe object holds the amounts needed for 2 portions
//the recipe argument should not be modified
export function scaleRecipe(recipe, portion){
    let newRecipe = {} ;
    
    for (const ingrediente in recipe) {
        newRecipe[ingrediente] = (recipe[ingrediente]/2)*portion;
    }
    
    return newRecipe;
}