import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-top-donors',
  templateUrl: './top-donors.component.html',
  styleUrls: ['./top-donors.component.css']
})
export class TopDonorsComponent implements OnInit {
  public donors:any;
  public flag=0;
  public email=localStorage.getItem('email');
  constructor(private http:HttpClient,private router:Router){}
  ngOnInit(): void {
    if(localStorage.getItem('email')==null){
      console.log("ng");
      this.router.navigateByUrl('/login');
    }
    else{
      this.http.get('http://127.0.0.1:5555/api/top_donors').subscribe(
        Response => {
          this.donors=Response;
          console.log(this.donors);
          for(var i=0; i<this.donors.length;i++){
            if(this.donors[i]._id==this.email){
              this.flag=1;
            }
          }
        }
      )
    }
  }
  goHome(): void{
    this.router.navigateByUrl('/home');
  }
  logout(){
    localStorage.removeItem('email');
    this.router.navigateByUrl('/login');
  }

}
