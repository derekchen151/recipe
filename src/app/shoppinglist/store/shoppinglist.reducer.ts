import { Action } from '@ngrx/store';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListActions } from './shoppinglist.actions';

export const ADD_NEW_INGREDIENT = 'ADD_NEW_INGREDIENT';


//initialize the initial state
const initialState = {
    ingredients: [
        new Ingredient("apple", 5),
        new Ingredient("tomato", 10)
    ]
}

export function shoppinglistReducer(state = initialState, action: ShoppingListActions) {
    switch(action.type) {
        case ADD_NEW_INGREDIENT: 
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload]
            }
    }
    return state;
}