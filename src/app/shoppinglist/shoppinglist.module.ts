import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShoppinglisteditComponent } from './shoppinglistedit/shoppinglistedit.component';
import { ShoppinglistComponent } from './shoppinglist.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ShoppinglisteditComponent,
    ShoppinglistComponent
  ]
})
export class ShoppinglistModule { }
