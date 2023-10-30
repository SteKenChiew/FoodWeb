import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CdkVirtualScrollViewport, ScrollDispatcher } from '@angular/cdk/scrolling';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {  FilterCategoryPipe } from './filter-category.pipe';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { VerificationComponent } from './verification/verification.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterCategoryPipe,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    ForgotpassComponent,
    VerificationComponent,
    RestaurantListComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ScrollingModule,
    CommonModule,
    ReactiveFormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
