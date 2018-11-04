import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RecipedetailComponent } from './recipes/recipedetail/recipedetail.component';
import { NoRecipeSelctedComponent } from './recipes/no-recipe-selcted/no-recipe-selcted.component';
import { EditrecipeComponent } from './recipes/editrecipe/editrecipe.component';
import { NewRecipeComponent } from './recipes/new-recipe/new-recipe.component';
import { ShoppinglisteditComponent } from './shoppinglist/shoppinglistedit/shoppinglistedit.component';

const routes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecipesComponent, children: [
    {path: '', component: NoRecipeSelctedComponent, pathMatch: 'full'},
    {path: 'new', component: NewRecipeComponent},
    {path: ':id', component: RecipedetailComponent},
    {path: ':id/edit', component: EditrecipeComponent}
  ]},
  {path: 'shoppinglist', component: ShoppinglistComponent},
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
