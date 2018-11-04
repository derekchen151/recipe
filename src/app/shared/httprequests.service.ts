import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';
<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { pipe } from 'rxjs';
=======
>>>>>>> 50603f12e23161d4139de1ad9d023a78b338bbda

@Injectable({
  providedIn: 'root'
})
export class HttprequestsService {

  constructor(private http: Http,
<<<<<<< HEAD
              private httpClinet: HttpClient,
=======
>>>>>>> 50603f12e23161d4139de1ad9d023a78b338bbda
              private auth: AuthService) { }

  saveData(recipes: Recipe[]) {
    const tk = this.auth.getToken();
<<<<<<< HEAD
    // return this.http.put("https://recipe-769ae.firebaseio.com/data.json?auth=" + tk, recipes);
    return this.httpClinet.put("https://recipe-769ae.firebaseio.com/data.json?auth=" + tk, recipes);
=======
    return this.http.put("https://recipe-769ae.firebaseio.com/data.json?auth=" + tk, recipes);
>>>>>>> 50603f12e23161d4139de1ad9d023a78b338bbda
  }

  getData() {
    const tk = this.auth.getToken();
<<<<<<< HEAD
    return this.httpClinet.get<Recipe[]>("https://recipe-769ae.firebaseio.com/data.json?auth=" + tk).pipe(map(
      (recipes) => {
=======
    return this.http.get("https://recipe-769ae.firebaseio.com/data.json?auth=" + tk).pipe(map(
      (response: Response) => {
        const recipes: Recipe[] = response.json();
>>>>>>> 50603f12e23161d4139de1ad9d023a78b338bbda
        for(let recipe of recipes) {
          if(!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      }
<<<<<<< HEAD
    ))
    // return this.http.get("https://recipe-769ae.firebaseio.com/data.json?auth=" + tk).pipe(map(
    //   (response: Response) => {
    //     const recipes: Recipe[] = response.json();
    //     for(let recipe of recipes) {
    //       if(!recipe['ingredients']) {
    //         recipe['ingredients'] = [];
    //       }
    //     }
    //     return recipes;
    //   }
    // ));
=======
    ));
>>>>>>> 50603f12e23161d4139de1ad9d023a78b338bbda
  }



}
