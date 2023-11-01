import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';  // Import MatDialogModule here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterCategoryPipe } from './filter-category.pipe';
import { FilterAdditionalPipe } from './filterAdditional.pipe';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { VerificationComponent } from './verification/verification.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { FoodDialogComponent } from './food-dialog/food-dialog.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    FilterCategoryPipe,
    FilterAdditionalPipe,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    ForgotpassComponent,
    VerificationComponent,
    RestaurantListComponent,
    RestaurantDetailComponent,
    FoodDialogComponent,
    CartComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ScrollingModule,
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
