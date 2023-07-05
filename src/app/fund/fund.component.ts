import { Component ,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FundraiserloginService } from '../fundraiserlogin.service';

export class Data{
  constructor(public org:any,public org_id:any,public fname:any,public desc:any,public total:any){}
}
@Component({
  selector: 'app-fund',
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.css']
})
export class FundComponent implements OnInit{
  public data: Data = new Data(null,null,null,null,null);
  public status!:String;
  public res:any;
  public org:any;
  constructor(private http:HttpClient,private router:Router){}
  ngOnInit(): void {
    if(localStorage.getItem('fid') == null){
      console.log("ng");
      this.router.navigateByUrl('/login');
    }
    this.status='waiting';
    this.org=FundraiserloginService.getId();
  }
  create(data: any): void {
    const url = 'http://127.0.0.1:5555/create_fund';
    this.data.org_id=this.org.id;
    console.log(this.data);
    this.http.post(url,this.data).subscribe((data) => {
    this.res = data;
    console.log(data);
    if(this.res.msg=="success"){
      console.log("success");
      FundraiserloginService.setId(this.org.email,this.org.org,this.org.id);
      this.status='success';
    }else{
      this.status="failed";
    }
    });
  }
}
