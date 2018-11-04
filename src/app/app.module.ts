import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
=======
>>>>>>> 50603f12e23161d4139de1ad9d023a78b338bbda

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ShoppinglistModule } from './shoppinglist/shoppinglist.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
<<<<<<< HEAD
    HttpClientModule,
=======
>>>>>>> 50603f12e23161d4139de1ad9d023a78b338bbda
    ShoppinglistModule,
    AuthModule,
    SharedModule,
    CoreModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
