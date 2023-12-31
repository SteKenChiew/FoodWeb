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
import { TrackorderComponent } from './trackorder/trackorder.component';
import { MerchantregisterComponent } from './merchantregister/merchantregister.component';
import {MerchantadditemComponent} from './merchantadditem/merchantadditem.component';
import {AdminmainpageComponent} from './adminmainpage/adminmainpage.component';
import {MerchantloginComponent} from './merchantlogin/merchantlogin.component';
import {MerchantmainpageComponent} from './merchantmainpage/merchantmainpage.component';
import {CusorderhistoryComponent} from './cusorderhistory/cusorderhistory.component';
import {CusactiveorderComponent} from './cusactiveorder/cusactiveorder.component';
import {ContactusComponent} from './contactus/contactus.component';
import {AboutusComponent} from './aboutus/aboutus.component';


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
  { path: 'order-summary/:bookingId', component:  OrderSummaryComponent },
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
  {path: 'trackorder', component: TrackorderComponent},
  {path: 'merchantregister', component: MerchantregisterComponent},
  {path: 'merchantadditem', component: MerchantadditemComponent},
  {path: 'adminmainpage', component:AdminmainpageComponent},
  {path: 'merchantlogin', component:MerchantloginComponent},
  {path: 'merchantmainpage', component:MerchantmainpageComponent},
  {path: 'cusorderhistory', component:CusorderhistoryComponent},
  {path: 'cusactiveorder', component:CusactiveorderComponent},
  {path: 'contactus', component:ContactusComponent},
  {path: 'aboutus', component:AboutusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

