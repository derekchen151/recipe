import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isRecipeShown: boolean = true;
  isShoppinglistShown: boolean = false;
  
  ngOnInit() {
    //initialize the firebox
    firebase.initializeApp({
      apiKey: "AIzaSyBtZ5k1irTzYLp0clJ3LKzFcd1ZQtElPjE",
      authDomain: "recipe-769ae.firebaseapp.com"
    });
  }
}
