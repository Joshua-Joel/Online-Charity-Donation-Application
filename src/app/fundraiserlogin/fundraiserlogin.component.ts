import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FundraiserloginService } from '../fundraiserlogin.service';
export class User{
  constructor(public umail:string,public upwd:string){}
}
@Component({
  selector: 'app-fundraiserlogin',
  templateUrl: './fundraiserlogin.component.html',
  styleUrls: ['./fundraiserlogin.component.css']
})
export class FundraiserloginComponent {
  public user: User = new User('','');
  submitted: boolean = false;
  res:any;
  constructor(private http:HttpClient,private router:Router,private service:FundraiserloginService){}
  public login(data:User){
    this.submitted = true;
    this.user = data;
    console.log(this.user);
    const url = 'http://127.0.0.1:5555/api/fundraiser_login';

    this.http.post(url,this.user).subscribe((data) => {
    this.res = data;
    console.log(data);
    if(this.res.auth=="true"){
      //FundraiserloginService.setId(this.res.email);
      this.router.navigateByUrl('/fundraiser');
    }
    });
}
}
