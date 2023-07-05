import { Component ,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AdminloginService } from '../adminlogin.service';
import { MyserviceService } from '../myservice.service';
import { FundraiserloginService } from '../fundraiserlogin.service';
export class User{
  constructor(public umail:any,public upwd:any,public role:any){}
}
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent  implements OnInit {
  public user: User = new User(null,null,null);
  public status!:String;
  submitted: boolean = false;
  res:any;
  constructor(private http:HttpClient,private router:Router,private service:AdminloginService){}
  ngOnInit(): void {
    this.status='waiting';
    this.user.role='- Role -';
  }
    public login(data:User){
      this.status='waiting';
      this.submitted = true;
      this.user = data;
      if(this.user.role=="Admin"){
        console.log("role"+this.user.role);
        const url = 'http://127.0.0.1:5555/api/admin_login';
        this.http.post(url,this.user).subscribe((data) => {
        this.res = data;
        console.log(data);
        if(this.res.auth=="true"){
          localStorage.setItem('adminid',this.res.email);
          AdminloginService.setId(this.res.email);
          this.router.navigateByUrl('/admin');
        }
        else{
          this.status="failed";
        }
        });
      }
      else if(this.user.role=="Donor"){
        const url = 'http://127.0.0.1:5555/api/donor_login';
        this.http.post(url,this.user).subscribe((data) => {
        this.res = data;
        console.log(data);
        if(this.res.auth=="true"){
          MyserviceService.setId(this.res.email);
          localStorage.setItem('email',this.res.email);
          this.router.navigateByUrl('/home');
        }
        else{
            this.status="failed";
        }
        });
      }
      else if(this.user.role=="Fundraiser"){
        const url = 'http://127.0.0.1:5555/api/fundraiser_login';
        this.http.post(url,this.user).subscribe((data) => {
        this.res = data;
        console.log(data);
        if(this.res.auth=="true"){
          FundraiserloginService.setId(this.res.email,this.res.org,this.res.id);
          localStorage.setItem('fid',this.res.id);
          localStorage.setItem('femail',this.res.email);
          this.router.navigateByUrl('/fundraiser');
        }else{
          this.status="failed";
        }
        });
      }
  }
}
