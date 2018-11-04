import { Action } from '@ngrx/store';
import { Ingredient } from 'src/app/shared/ingredient.model';

export const ADD_NEW_INGREDIENT = 'ADD_NEW_INGREDIENT';

export class AddIngredient implements Action {
    readonly type = ADD_NEW_INGREDIENT;
    payload: Ingredient;
}

export type ShoppingListActions = AddIngredient;