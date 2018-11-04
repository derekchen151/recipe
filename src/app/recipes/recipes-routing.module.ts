import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes.component';
import { NoRecipeSelctedComponent } from './no-recipe-selcted/no-recipe-selcted.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { RecipedetailComponent } from './recipedetail/recipedetail.component';
import { EditrecipeComponent } from './editrecipe/editrecipe.component';
import { AuthGuardService } from '../auth/auth-guard.service';

const recipesRoutes: Routes = [
  {path: '', component: RecipesComponent, children: [
    {path: '', component: NoRecipeSelctedComponent, pathMatch: 'full'},
    {path: 'new', component: NewRecipeComponent, canActivate: [AuthGuardService]},
    {path: ':id', component: RecipedetailComponent},
    {path: ':id/edit', component: EditrecipeComponent, canActivate: [AuthGuardService]}
  ]}
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forChild(recipesRoutes)
  ],
  providers: [
    AuthGuardService
  ]
})
export class RecipesRoutingModule { }
