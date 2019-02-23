import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility';

// BurgerBuilder.js
const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false
};

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.ADD_INGREDIENT:
            const updatedIngredientAdd  = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 }
            const updatedIngredientsAdd = updateObject(state.ingredients, updatedIngredientAdd);
            const updatedStateAdd = {
                ingredients: updatedIngredientsAdd,
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            }
            return updateObject(state, updatedStateAdd);
                  

        case actionTypes.REMOVE_INGREDIENT:
            const updatedIngredientRem  = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 }
            const updatedIngredientsRem = updateObject(state.ingredients, updatedIngredientRem);
            const updatedStateRem = {
                ingredients: updatedIngredientsRem,
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            }
            return updateObject(state, updatedStateRem);

        case actionTypes.SET_INGREDIENTS:
            return updateObject(state, {
                ingredients: {
                    salad: action.ingredients.salad,
                    bacon: action.ingredients.bacon,
                    cheese: action.ingredients.cheese,
                    meat: action.ingredients.meat,
                },
                totalPrice: 4,
                error: false
                }
            );
        
        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return updateObject(state, {
                error: true
                } 
            );
            
        
        default:
            return state;
    }

};

export default reducer;