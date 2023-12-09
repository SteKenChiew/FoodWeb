import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { VerificationComponent } from './verification/verification.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { CartComponent } from './cart/cart.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { ProfileComponent } from './profile/profile.component';
import { MerchantmainComponent } from './merchantmain/merchantmain.component';
import { OrderpreparingpageComponent } from './orderpreparingpage/orderpreparingpage.component';
import { ReadyorderpageComponent } from './readyorderpage/readyorderpage.component';
import { OrderhistorypageComponent } from './orderhistorypage/orderhistorypage.component';
import { MerchanteditmenuComponent } from './merchanteditmenu/merchanteditmenu.component';
import { AdminloginComponent} from './adminlogin/adminlogin.component';
import {OrderdetailsComponent} from './orderdetails/orderdetails.component';
import { AdminresListComponent } from './adminres-list/adminres-list.component';
import { AdmincusListComponent } from './admincus-list/admincus-list.component';

const routes: Routes = [
  
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgotpass', component: ForgotpassComponent},
  { path: 'verification', component: VerificationComponent },
  { path: 'restaurant-list', component: RestaurantListComponent  },
  { path: 'restaurant-detail/:id/:name', component: RestaurantDetailComponent },
  { path: 'restaurant-detail', component: RestaurantDetailComponent },
  { path: 'cart', component:  CartComponent },
  { path: 'order-summary', component:  OrderSummaryComponent },
  { path: 'profile', component:  ProfileComponent },
  { path: 'merchantmain', component:  MerchantmainComponent },
  { path: 'orderpreparingpage', component:  OrderpreparingpageComponent },
  { path: 'readyorderpage', component:  ReadyorderpageComponent },
  { path: 'orderhistorypage', component:  OrderhistorypageComponent },
  { path: 'merchanteditmenu', component:  MerchanteditmenuComponent },
  { path: 'admin', component:  AdminloginComponent },
  { path: 'orderdetails', component: OrderdetailsComponent},
  { path: 'adminreslist', component: AdminresListComponent},
  { path: 'admincuslist', component: AdmincusListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

