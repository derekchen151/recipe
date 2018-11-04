import { Component, OnInit} from '@angular/core';
import { HttprequestsService } from '../../shared/httprequests.service';
import { RecipeService } from '../../recipes/recipes.service';
import { Recipe } from '../../recipes/recipe.model';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  recipes: Recipe[];

  constructor(private httpRequests: HttprequestsService,
              private recipesService: RecipeService,
              private auth: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  onSaveData() {
    this.recipes = this.recipesService.getRecipes();
    this.httpRequests.saveData(this.recipes).subscribe(
      (response) => console.log(response),
      (error) => console.log(error));
  }

  onFetchData() {
    this.httpRequests.getData()
    .subscribe(
      (recipes: Recipe[]) => {
        this.recipesService.setRecipes(recipes);
      }),
      (error) => {
        console.log(error);
      }
  }

  onLogout() {
    this.auth.logOut();
    this.router.navigate(['/recipes']);
  }

  checkIsAuth() {
    if(this.auth.isAuthenticated()) {
      return true;
    }
    return false;
  }

}
