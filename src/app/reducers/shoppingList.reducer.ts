import * as ShoppingListActions from "../actions/shoppingList.actions";
import { Ingredient } from "../shared/ingredient.model";

const initialState = {
    ingredients: [
        new Ingredient("apple", 5),
        new Ingredient("tomato", 10)
    ]
} 
    

export function ShoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions) {
    switch(action.type) {
        case ShoppingListActions.ADD_INGREDIENT:
            return {
                ...state, 
                ingredients: [...state.ingredients, action.payload]
            }
        default:
            return state; 
    }
}