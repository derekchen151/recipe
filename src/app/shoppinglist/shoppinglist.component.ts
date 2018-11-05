import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shoppinglist.service';
@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {
  //remove onDestroy interface implementation
  shoppingListState:Observable<{ingredients: Ingredient[]}>;
  subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService,
              private store: Store<{shoppingList: {ingredients: Ingredient[]}} >) { }

  ngOnInit() {
    this.shoppingListState = this.store.select("shoppingList");
    // this.subscription = this.shoppingListService.ingredientsChanged.subscribe(
    //   (ingredients: Ingredient[]) =>
    //   {
    //     this.ingredients = ingredients;
    //   })
  }

  onEditShoppingList(index: number) {
    this.shoppingListService.editShoppingList(index);
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

}
