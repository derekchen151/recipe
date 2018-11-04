import { Injectable, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService implements OnInit {

  ingredientsChanged = new Subject<Ingredient[]>();
  shoppinglistEdited = new Subject<number>();

  private ingredients:Ingredient[] = [
    new Ingredient("apple", 5),
    new Ingredient("tomato", 10)
  ];

  constructor() { }

  ngOnInit() {
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  addnewIngredient(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  editShoppingList(index: number) {
    this.shoppinglistEdited.next(index);
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  editIngredient(index: number, name: string, amount: number) {
    const ingredient = new Ingredient(name, amount);
    this.ingredients[index] = ingredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  removeIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
