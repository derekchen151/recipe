import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-editrecipe',
  templateUrl: './editrecipe.component.html',
  styleUrls: ['./editrecipe.component.css']
})
export class EditrecipeComponent implements OnInit {
  id:number;
  editRecipeForm: FormGroup;
  recipe: Recipe;
  ingredients: FormArray;
  ingredientsList: Ingredient[] = [];

  constructor(private activedRoute: ActivatedRoute,
              private recipeService: RecipeService,
              private router: Router) { }

  ngOnInit() {
    this.activedRoute.paramMap.subscribe((map:ParamMap) => {
      this.id = +map.get("id");
    })
    this.recipe = this.recipeService.getRecipeByIndex(this.id);

    const recipeName = this.recipe.name;
    const recipeURL = this.recipe.imagePath;
    const recipeDescription = this.recipe.description;

    this.ingredients = new FormArray([]);

    for(let i=0; i<this.recipe.ingredients.length; i++) {
      (this.ingredients as FormArray).push(new FormGroup({
        'iName': new FormControl(this.recipe.ingredients[i].name, Validators.required),
        'iAmount': new FormControl(this.recipe.ingredients[i].amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      }));
    }


    this.editRecipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'url': new FormControl(recipeURL, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': this.ingredients
    });
  }

  onUpdateRecipe(){
    this.recipe = new Recipe(
      this.editRecipeForm.value.name,
      this.editRecipeForm.value.description,
      this.editRecipeForm.value.url,
      []
    );
    const formArray = this.editRecipeForm.value.ingredients;
    for(let i=0; i<formArray.length; i++) {
      let ingredient = new Ingredient(formArray[i].iName, +formArray[i].iAmount);
      this.ingredientsList.push(ingredient);
    }
    this.recipe.ingredients = this.ingredientsList;
    this.recipeService.updateRecipe(this.id, this.recipe);
    this.editRecipeForm.reset();
    this.router.navigate(['../'], {relativeTo: this.activedRoute });
  }

  onDeleteIngredient(index:number) {
    (this.editRecipeForm.get("ingredients") as FormArray).removeAt(index);
  }

  getControls() {
    return this.editRecipeForm.get('ingredients');
  }

}
