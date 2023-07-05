import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-donation-list',
  templateUrl: './donation-list.component.html',
  styleUrls: ['./donation-list.component.css']
})
export class DonationListComponent implements OnInit {
  public result:any;
  public email:any;
  public total=0;
  public flag=0;
  constructor(private router:Router,private http:HttpClient){}
  ngOnInit(): void {
    if(localStorage.getItem('email')==null){
      console.log("ng");
      this.router.navigateByUrl('/login');
    }
      this.email=MyserviceService.getId();
      console.log("get "+this.email);
      this.email= localStorage.getItem('email');
      console.log("storage "+this.email);
      const url = 'http://127.0.0.1:5555/api/get_my_donations';
    this.http.post(url,{donor_id:this.email}).subscribe((data) => {
    this.result = data;
    if(data==null || this.result.length==0 || data==undefined){
      this.flag=1;
    }
    console.log(this.result);
    for(var i = 0; i < this.result.length; i++) {
      this.total+=this.result[i].amount;
    }
    });
  }

  goHome(): void{
    this.router.navigateByUrl('/home');
  }
  logout(){
    localStorage.removeItem('email');
    this.router.navigateByUrl('/login');
  }
}
