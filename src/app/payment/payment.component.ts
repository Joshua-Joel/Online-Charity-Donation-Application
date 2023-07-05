import { Component,Input ,OnInit} from '@angular/core';
import { PaymentService } from '../payment.service';
import { HttpClient } from '@angular/common/http';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';
export class Data{
  constructor(public name:any,public cardno:any,public cvv:any,public amount:any){}
}
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  exportAs: 'payment'
})
export class PaymentComponent {

  public data:Data = new Data(null,null,null,null);
  public status!:String;
  public fid!:Number;
  public fundName!:String;
  public orgName!:String;
  public selected_fund_id!:Number;
  public max:any;
  public donarEmail=localStorage.getItem('email');
  res:any;
  constructor(private payment:PaymentService,private http:HttpClient,private router:Router){}
  ngOnInit(): void {
    if(localStorage.getItem('email')==null){
      console.log("ng");
      this.router.navigateByUrl('/login');
    }
    var obj:any =this.payment.getDetails();
    this.fundName=obj.fname;
    this.orgName=obj.forg;
    this.fid=obj.id;
    this.fid=Number(localStorage.getItem('fundid'));
      this.fundName=String(localStorage.getItem('fname'));
      this.orgName=String(localStorage.getItem('forg'));
      this.max=Number(localStorage.getItem('max'));
      console.log('check:'+this.fid+" "+this.fundName+" "+this.orgName)
  }
  validate(data:Data):Boolean{
    if(data.amount > this.max  ){
      this.status='invalid';
      // alert("Please enter amount less than "+this.max);
      return false;
    }
    else if(data.amount <100 && data.amount <= this.max  && this.max< 100){
      return true;
    }
    else if (data.amount <100){
      this.status='less';
      return false;
    }
    else{
      return true;
    }
  }
  makePayment(data:Data){
    if(this.validate(data)){
      //var email=MyserviceService.getId();
      var email=localStorage.getItem('email');
      console.log("email: " + email);
      var url="http://127.0.0.1:5555/donate";
        this.http.post(url,{fund_id:this.fid,fund_name:this.fundName,org_name:this.orgName,donor_id:email,donor_name:this.data.name,amount:data.amount,card_no:data.cardno,cvv:data.cvv}).subscribe((data) => {
          this.res=data;
          if(this.res.msg === "success"){
            this.status="success";
          }
          else{
            this.status="failed";
          }
          console.log(this.status);
          });
    }
    else{

    }
  }
  logout(){
    localStorage.removeItem('email');
    this.router.navigateByUrl('/login');
  }
}
