import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ShoppinglistModule } from './shoppinglist/shoppinglist.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { ShoppingListReducer } from './reducers/shoppingList.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: "recipe-app"}),
    HttpModule,
    ShoppinglistModule,
    AuthModule,
    SharedModule,
    CoreModule,
    AppRoutingModule,
    StoreModule.forRoot({
      shoppingList: ShoppingListReducer
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
