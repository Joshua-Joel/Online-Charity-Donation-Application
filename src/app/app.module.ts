import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DonorsignupComponent } from './donorsignup/donorsignup.component';
import { FundraiserSignupComponent } from './fundraisersignup/funderaiser.component';
import { HomeComponent } from './home/home.component';
import { FundraiserloginComponent } from './fundraiserlogin/fundraiserlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminComponent } from './admin/admin.component';
import { FundraiserComponent } from './fundraiser/fundraiser.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { MyserviceService } from './myservice.service';
import { PaymentComponent } from './payment/payment.component';
import { SlideComponent } from './slide/slide.component';
import { FundComponent } from './fund/fund.component';
import { DonationListComponent } from './donation-list/donation-list.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { MatTableExporterModule } from 'mat-table-exporter';
import { ngxCsv } from 'ngx-csv/ngx-csv';
import { TopDonorsComponent } from './top-donors/top-donors.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AfterViewInit } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DonorsignupComponent,
    FundraiserSignupComponent,
    HomeComponent,
    FundraiserloginComponent,
    AdminloginComponent,
    AdminComponent,
    FundraiserComponent,
    PaymentComponent,
    SlideComponent,
    FundComponent,
    DonationListComponent,
    TopDonorsComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    NgxExtendedPdfViewerModule,
    MatTableExporterModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
