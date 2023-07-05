import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export class Fundraiser{
  constructor(public oname:any,public owname:any,public oemail:any,public pass:any,public mobile_number:any,public reg_no:any,public state:any,public City:any,public street:any,public area:any){}
}
@Component({
  selector: 'app-funderaiser',
  templateUrl: './funderaiser.component.html',
  styleUrls: ['./funderaiser.component.css']
})
export class FundraiserSignupComponent {
  public res:any;
  public fundraiser: Fundraiser = new Fundraiser(null,null,null,null,null,null,null,null,null,null);
  public status!:String;
  constructor(private http:HttpClient){}
  validate(data:any):any{
    console.log(String(data.pass));
  if(String(data.mobile_number).length!=10){
    this.status='invalid_mobile';
    return false;
  }
  else if(!(new RegExp(".*[0-9].*").test(String(data.pass)) && new RegExp(".*[a-z].*").test(String(data.pass)) && new RegExp(".*[A-Z].*").test(String(data.pass)) && String(data.pass).length>=8)){
    this.status='invalid_password';
    return false;
  }
  else{
    console.log('valid data');
    return true;
  }
}
  signup(data:Fundraiser){
    if(this.validate(data)){
      const url = 'http://127.0.0.1:5555/fundraiser_sign_up';

      this.http.post(url,this.fundraiser).subscribe((data) => {
          this.res=data;
          console.log(this.res);
          if( this.res.msg=='success'){
              this.status='success';
          }
          else{
            this.status='failed';
          }
        });
    }
  }
}
