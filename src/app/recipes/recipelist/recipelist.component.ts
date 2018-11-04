import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {

  recipeLists: Recipe[] = [];
  subscription : Subscription;

  constructor(private recipeService: RecipeService,
              private activedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.recipeLists = this.recipeService.getRecipes();
    this.subscription = this.recipeService.recipeChanged.subscribe(
      (recipeLists: Recipe[]) => {
        this.recipeLists = recipeLists;
      });
  }

  onSelectRecipe(id: number) {
    this.router.navigate([id], {relativeTo: this.activedRoute});
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.activedRoute});
  }

}
