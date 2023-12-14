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
import { FilterBySearchPipe } from './filter-by-search.pipe';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { VerificationComponent } from './verification/verification.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { FoodDialogComponent } from './food-dialog/food-dialog.component'; //dialog
import { MerchanteditmenudialogComponent } from './merchanteditmenudialog/merchanteditmenudialog.component'; //dialog
import { CartComponent } from './cart/cart.component';
import { FormsModule } from '@angular/forms';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { ProfileComponent } from './profile/profile.component';
import { MerchantmainComponent } from './merchantmain/merchantmain.component';
import { OrderpreparingpageComponent } from './orderpreparingpage/orderpreparingpage.component';
import { ReadyorderpageComponent } from './readyorderpage/readyorderpage.component';
import { OrderhistorypageComponent } from './orderhistorypage/orderhistorypage.component';
import { MerchanteditmenuComponent } from './merchanteditmenu/merchanteditmenu.component';
import { AdminloginComponent} from './adminlogin/adminlogin.component';
import { environment } from 'src/environment/environment';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { MerchantauthService } from './services/merchantauth.service';
import { OrderdetailsComponent} from './orderdetails/orderdetails.component';
import { AdminresListComponent } from './adminres-list/adminres-list.component';
import { AdmincusListComponent } from './admincus-list/admincus-list.component';
import { TrackorderComponent } from './trackorder/trackorder.component';
import { MerchantregisterComponent } from './merchantregister/merchantregister.component';
import {MerchantadditemComponent} from './merchantadditem/merchantadditem.component';
import {AdminmainpageComponent} from './adminmainpage/adminmainpage.component';
import {MerchantloginComponent} from './merchantlogin/merchantlogin.component';
import { MerchantHeaderComponent } from './merchantheader/merchantheader.component';
import {MerchantmainpageComponent} from './merchantmainpage/merchantmainpage.component';
import { OrderService } from './services/order.service';
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
    FilterBySearchPipe,
    OrderSummaryComponent,
    ProfileComponent,
    OrderpreparingpageComponent,
    ReadyorderpageComponent,
    OrderhistorypageComponent,
    MerchanteditmenuComponent,
    MerchanteditmenudialogComponent,
    AdminloginComponent,
    OrderdetailsComponent,
    AdminresListComponent,
    AdmincusListComponent,
    TrackorderComponent,
    MerchantregisterComponent,
    MerchantadditemComponent,
    AdminmainpageComponent,
    MerchantloginComponent,
    MerchantmainComponent,
    MerchantHeaderComponent,
    MerchantmainpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ScrollingModule,
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    FormsModule ,
    HttpClientModule,
  
    
    
  ],
  providers: [
    AuthService,
    MerchantauthService,
    OrderService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
