import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipelistComponent } from './recipes/recipelist/recipelist.component';
import { RecipeitemComponent } from './recipes/recipelist/recipeitem/recipeitem.component';
import { HeaderComponent } from './header/header.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { ShoppinglisteditComponent } from './shoppinglist/shoppinglistedit/shoppinglistedit.component';
import { RecipedetailComponent } from './recipes/recipedetail/recipedetail.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { RecipeService } from './recipes/recipes.service';
import { ShoppingListService } from './shoppinglist/shoppinglist.service';
import { EditrecipeComponent } from './recipes/editrecipe/editrecipe.component';
import { AppRoutingModule } from './app-routing.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NoRecipeSelctedComponent } from './recipes/no-recipe-selcted/no-recipe-selcted.component';
import { NewRecipeComponent } from './recipes/new-recipe/new-recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipelistComponent,
    RecipeitemComponent,
    HeaderComponent,
    ShoppinglistComponent,
    ShoppinglisteditComponent,
    RecipedetailComponent,
    DropdownDirective,
    EditrecipeComponent,
    PagenotfoundComponent,
    NoRecipeSelctedComponent,
    NewRecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    RecipeService,
    ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
