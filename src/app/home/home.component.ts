import { HttpClient } from '@angular/common/http';
import { Component,OnInit, TemplateRef } from '@angular/core';
import { PaymentService } from '../payment.service';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';
import { NgxSpinnerService } from "ngx-spinner";
import { SlideComponent } from '../slide/slide.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export  class HomeComponent implements OnInit {
  public fundList:any;
  public donarEmail:any;
  public flag:Boolean=false;
  constructor(private http:HttpClient,private service:PaymentService,private service1:MyserviceService ,public router:Router,private spinner: NgxSpinnerService){}

  ngOnInit(): void {

      const val = localStorage.getItem('email');
      if(localStorage.getItem('email')==null){
        console.log("ng");
        this.router.navigateByUrl('/login');
      }
      if(val==null){
        console.log('if');
      }
      else{
        console.log("else"+val);
      }
      this.donarEmail=val;
      console.log('validate'+this.donarEmail);
      this.http.get('http://localhost:5555/api/funds').subscribe(
        Response => {
          this.fundList=Response;
          console.log(this.fundList);
        }
      )
  }

  assign(fid:Number,fname:String,forg:String,max:number){
    if(this.donarEmail==null){
      console.log("ng");
      this.router.navigateByUrl('/login');
    }
    else{
      console.log("navi"+this.donarEmail);
    this.service.setDetails(fid,fname,forg);
    localStorage.setItem('fundid',String(fid));
    localStorage.setItem('fname',String(fname));
    localStorage.setItem('forg',String(forg));
    localStorage.setItem('max',String(max));
    //MyserviceService.setId(this.donarEmail);
    this.router.navigateByUrl('/payment');
    }
  }
  logout(){
    localStorage.removeItem('email');
    this.router.navigateByUrl('/login');
  }
}
