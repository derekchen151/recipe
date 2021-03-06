import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttprequestsService {

  constructor(private http: Http,
              private auth: AuthService) { }

  saveData(recipes: Recipe[]) {
    const tk = this.auth.getToken();
    return this.http.put("https://recipe-769ae.firebaseio.com/data.json?auth=" + tk, recipes);
  }

  getData() {
    const tk = this.auth.getToken();
    return this.http.get("https://recipe-769ae.firebaseio.com/data.json?auth=" + tk).pipe(map(
      (response: Response) => {
        const recipes: Recipe[] = response.json();
        for(let recipe of recipes) {
          if(!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      }
    ));
  }



}
