import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
export class Data{
  constructor(public email:any,public oldPass:any,public newPass:any){}
}
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  public status:string="";
  public res:any;
  public data:Data=new Data(localStorage.getItem('email'),'','');
  constructor(private http:HttpClient,private router:Router){}
  ngOnInit(): void {
    if(localStorage.getItem('email')==null){
      console.log("ng");
      this.router.navigateByUrl('/login');
    }
  }
  validate(password:string):Boolean{
    if(password==""){
      this.status = "failed";
      return false;
    }
    else if(!(new RegExp(".*[0-9].*").test(String(password)) && new RegExp(".*[a-z].*").test(String(password)) && new RegExp(".*[A-Z].*").test(String(password)) && String(password).length>=8)){
      this.status='weak_password';
      return false;
    }
    else{
      return true;
    }
  }
  change(data:any){
    if(this.validate(data.newPass)){
      var url="http://127.0.0.1:5555/change_pass";
        this.http.post(url,{email:localStorage.getItem('email'),oldPass:data.oldPass,newPass:data.newPass}).subscribe((response) => {
          this.res=response;
          if(this.res.msg === "success"){
            this.status="success";
          }
          else if(this.res.msg === "incorrect"){
            this.status="invalid";
          }
          else if(this.res.msg === "failed"){
            this.status="failed";
          }
          console.log(this.status);
          });
    }
    else{

    }

  }

}
