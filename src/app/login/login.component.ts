import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';
export class User{
  constructor(public umail:string,public upwd:string){}
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit{
  public user: User = new User('','');
  submitted: boolean = false;
  res:any;
  constructor(private http:HttpClient,private router:Router,private service:MyserviceService){}
  ngOnInit(): void {}
    public login(data:User){
      this.submitted = true;
      this.user = data;
      console.log(this.user);
      const url = 'http://127.0.0.1:5555/api/donor_login';

      this.http.post(url,this.user).subscribe((data) => {
      this.res = data;
      console.log(data);
      if(this.res.auth=="true"){
        MyserviceService.setId(this.res.email);
        this.router.navigateByUrl('/home');
      }
      });
  }


}
