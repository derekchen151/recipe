import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shoppinglist/shoppinglist.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService implements OnInit {
  private recipeLists: Recipe[] = [
  new Recipe('A test recipe',
              'This is a test recipe',
              'https://images.unsplash.com/photo-1506368083636-6defb67639a7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f6fc8776ae60faebee6b009f9bd2f382&auto=format&fit=crop&w=634&q=80',
              [new Ingredient('Egg', 3),
               new Ingredient('Flower', 2)]
  ),
  new Recipe('Another test recipe',
              'This is another test recipe',
              'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=37f8178994660c8bace76993a937307c&auto=format&fit=crop&w=675&q=80',
              [new Ingredient('Tomato', 3),
               new Ingredient("Onion", 1)]
  )];

  recipeChanged = new Subject<Recipe[]>();
  recipeItemSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  getRecipes() {
    return this.recipeLists.slice();
  }

  addNewRecipes(recipe: Recipe) {
    this.recipeLists.push(recipe);
    this.recipeChanged.next(this.recipeLists.slice());
  }

  addToShoppingList(ingredients: Ingredient[]) {
    for(let i=0; i<ingredients.length; i++) {
      this.shoppingListService.addnewIngredient(ingredients[i]);
    }
  }

  getRecipeByIndex(index: number) {
    return this.recipeLists[index];
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipeLists[index] = recipe;
    this.recipeChanged.next(this.recipeLists.slice());
  }

  removeRecipe(index: number) {
    this.recipeLists.splice(index, 1);
    this.recipeChanged.next(this.recipeLists.slice());
  }

  setRecipes(recipes: Recipe[]) {
    this.recipeLists = recipes;
    this.recipeChanged.next(this.recipeLists.slice());
  }
}
