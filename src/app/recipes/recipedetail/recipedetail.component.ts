import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { RecipeService } from '../recipes.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.css']
})
export class RecipedetailComponent implements OnInit {
  index: number;
  recipe: Recipe;

  constructor(private recipeService: RecipeService,
              private activedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.activedRoute.paramMap.subscribe(
      (map: ParamMap) => {
        this.index = +map.get("id");
        this.recipe = this.recipeService.getRecipeByIndex(this.index);
    });
  }
  
  onAddToShoppingList(ingredients: Ingredient[]) {
    this.recipeService.addToShoppingList(ingredients);
  }

  onDeleteRecipe(index: number) {
    this.recipeService.removeRecipe(index);
    this.router.navigate(['/']);
  }

}
