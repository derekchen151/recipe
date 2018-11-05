import { Ingredient } from "../shared/ingredient.model";
import { Action } from '@ngrx/store';

export const ADD_INGREDIENT = "[SHOPPINGLIST] AddIngredient";

export class AddIngredient implements Action {
    readonly type = ADD_INGREDIENT;
    payload: Ingredient;
}

export type ShoppingListActions = AddIngredient;