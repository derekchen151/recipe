import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent implements OnInit {

  newRecipeForm: FormGroup;
  newRecipe: Recipe;
  ingredientsList: Ingredient[] = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.newRecipeForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'url': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'ingredients': new FormArray([
        new FormGroup({
          'iName': new FormControl(null, Validators.required),
          'iAmount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
        })
      ])
    });
  }

  onNewRecipe() {
    this.newRecipe = new Recipe(
      this.newRecipeForm.value.name,
      this.newRecipeForm.value.description,
      this.newRecipeForm.value.url,
      []
    );
    const formArray = this.newRecipeForm.value.ingredients;
    for(let i=0; i<formArray.length; i++) {
      let ingredient = new Ingredient(formArray[i].iName, +formArray[i].iAmount);
      this.ingredientsList.push(ingredient);
    }
    this.newRecipe.ingredients = this.ingredientsList;
    this.recipeService.addNewRecipes(this.newRecipe);
    this.newRecipeForm.reset();
  }

  onAddIngredient() {
    (this.newRecipeForm.controls.ingredients as FormArray).push(
      new FormGroup({
        'iName': new FormControl(null),
        'iAmount': new FormControl(null)
      })
    );
  }

  onDeleteIngredient(index:number) {
    (this.newRecipeForm.get("ingredients") as FormArray).removeAt(index);
  }

}
