import { Component, OnInit, ViewChild, Input, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shoppinglist.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shoppinglistedit',
  templateUrl: './shoppinglistedit.component.html',
  styleUrls: ['./shoppinglistedit.component.css']
})
export class ShoppinglisteditComponent implements OnInit, OnDestroy {

  @ViewChild('f')
  editForm: NgForm;

  @Input() index: number;

  subscription: Subscription;
  ingrident: Ingredient;
  isEditMode: boolean = false;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.shoppinglistEdited.subscribe(
      (index: number) => {
        this.index = index;
        this.isEditMode = true;
        this.ingrident = this.shoppingListService.getIngredient(index);
        this.editForm.setValue({
          name: this.ingrident.name,
          amount: this.ingrident.amount
        });
    })
  }

  onAddUpdateIngredient(f: NgForm) {
    const name = f.value.name;
    const amount = +f.value.amount;
    if(!this.isEditMode) {
      this.shoppingListService.addnewIngredient(
          new Ingredient(name, amount
          ))
    } else {
      this.shoppingListService.editIngredient(this.index, name, amount);
    }
    this.isEditMode = false;
    f.reset();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onResetForm(f) {
    f.reset();
    this.isEditMode = false;
  }

  onDeleteItem(f) {
    this.shoppingListService.removeIngredient(this.index);
    f.reset();
  }

}
