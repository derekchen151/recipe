import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { RecipeService } from '../recipes/recipes.service';
import { ShoppingListService } from '../shoppinglist/shoppinglist.service';
import { HttprequestsService } from '../shared/httprequests.service';
import { AuthService } from '../auth/auth.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],
  declarations: [    
    HeaderComponent,
    HomeComponent,
    PagenotfoundComponent
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ],
  providers: [
    RecipeService,
    ShoppingListService,
    HttprequestsService,
    AuthService
  ]
})
export class CoreModule { }
