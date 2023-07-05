import { Component,OnInit } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { FundraiserloginService } from '../fundraiserlogin.service';
@Component({
  selector: 'app-fundraiser',
  templateUrl: './fundraiser.component.html',
  styleUrls: ['./fundraiser.component.css']
})
export class FundraiserComponent implements OnInit {
  public res:any;
  public user:any;
  constructor(private http:HttpClient,private router:Router){}
  ngOnInit(): void {
    if(localStorage.getItem('fid') == null){
      console.log("ng");
      this.router.navigateByUrl('/login');
    }
    this.user=FundraiserloginService.getId();
    this.user.id=Number(localStorage.getItem('fid'));
    this.user.email=localStorage.getItem('femail');
    console.log('check:-'+localStorage.getItem('fid')+'check2:-'+this.user.id);
    const url = 'http://127.0.0.1:5555/api/get_my_funds';
    var body={org:this.user.id};
    console.log(this.user);

    this.http.post(url,body).subscribe((data) => {
    this.res = data;
    console.log(this.res);
    });
  }
  logout(){
    localStorage.removeItem('fid');
    this.router.navigateByUrl('/login');
  }
  navigate(){
    FundraiserloginService.setId(this.user.email,this.user.org,this.user.id);
    this.router.navigateByUrl('/createfund');
  }
  deleteFund(id:Number){
    const url4 = 'http://127.0.0.1:5555/api/del_fund';
    this.http.post(url4,{id:id}).subscribe((data) => {
    });
    for(var i = 0; i < this.res.length; i++){
      if(this.res[i]._id === id){
        this.res.splice(i, 1);
      }
    }
  }
}
