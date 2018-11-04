import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditrecipeComponent } from './editrecipe/editrecipe.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { NoRecipeSelctedComponent } from './no-recipe-selcted/no-recipe-selcted.component';
import { RecipedetailComponent } from './recipedetail/recipedetail.component';
import { RecipelistComponent } from './recipelist/recipelist.component';
import { RecipesComponent } from './recipes.component';
import { RecipeitemComponent } from './recipelist/recipeitem/recipeitem.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipesRoutingModule } from './recipes-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RecipesRoutingModule
  ],
  declarations: [
      EditrecipeComponent,
      NewRecipeComponent,
      NoRecipeSelctedComponent,
      RecipedetailComponent,
      RecipelistComponent,
      RecipesComponent,
      RecipeitemComponent
  ]
})
export class RecipesModule { }
