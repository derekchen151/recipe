import { Action } from '@ngrx/store';
import { Ingredient } from '../../shared/ingredient.model';
import * as ShoppingListActions from './shoppinglist.actions';


//initialize the initial state
const initialState = {
    ingredients: [
        new Ingredient("apple", 5),
        new Ingredient("tomato", 10)
    ]
}

export function shoppinglistReducer(state = initialState, action: ShoppingListActions.ShoppingListActions) {
    switch(action.type) {
        case ShoppingListActions.ADD_NEW_INGREDIENT: 
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload]
            }
        default: return state;
    }

    return state;
}