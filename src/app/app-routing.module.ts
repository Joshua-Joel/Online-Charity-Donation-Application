import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DonorsignupComponent } from './donorsignup/donorsignup.component';
import { FundraiserSignupComponent } from './fundraisersignup/funderaiser.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { FundraiserComponent } from './fundraiser/fundraiser.component';
import { FundraiserloginComponent } from './fundraiserlogin/fundraiserlogin.component';
import { PaymentComponent } from './payment/payment.component';
import { SlideComponent } from './slide/slide.component';
import { FundComponent } from './fund/fund.component';
import { DonationListComponent } from './donation-list/donation-list.component';
import { TopDonorsComponent } from './top-donors/top-donors.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
const routes: Routes = [
  {path: '',component:AdminloginComponent},
  { path: 'home', component: HomeComponent},
  {path: 'donorsignup', component:  DonorsignupComponent},
  {path: 'login', component:AdminloginComponent },
  {path:'fundraisersignup', component: FundraiserSignupComponent},
  {path:'admin',component:AdminComponent},
  {path:'fundraiser',component:FundraiserComponent },
  {path:'payment',component:PaymentComponent},
  {path:'slider',component:SlideComponent},
  {path:'createfund',component:FundComponent},
  {path:'mydonations',component:DonationListComponent},
  {path:'topdonors',component:TopDonorsComponent},
  {path:'change_password',component:ChangePasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
