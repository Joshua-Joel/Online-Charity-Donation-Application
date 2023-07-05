import { Component ,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
export class Donor{
  constructor(public name:string,public email:string,public pass:String,public mobile_number:String){}
}
@Component({
  selector: 'app-donorsignup',
  templateUrl: './donorsignup.component.html',
  styleUrls: ['./donorsignup.component.css']
})
export class DonorsignupComponent implements OnInit {
  ngOnInit(): void {
    this.status='waiting';
  }
  public donor:Donor=new Donor('','','','');
  public submitted:Boolean = false;
  public res:any;
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
  donorsignup(data:Donor){
    if(this.validate(data)){
      this.donor = data;
      console.log(this.donor);
      const url = 'http://127.0.0.1:5555/donor_sign_up';

        this.http.post(url,this.donor).subscribe((data) => {
            this.res=data;
            console.log(this.res);
            if( this.res.msg=='success'){
                this.status='success';
            }
            else if(this.res.valid=="false"){
              console.log('check else if');
              this.status='invalid_email';
            }
            else{
              this.status='failed';
            }
          });
    }
  }
}
