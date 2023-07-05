import { Component,ViewChild,ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import jsPDF  from 'jspdf';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import html2canvas from 'html2canvas';
import { MatTableExporterDirective } from 'mat-table-exporter/public-api';
import { MatTableExporterModule } from 'mat-table-exporter/public-api';
import { ngxCsv } from 'ngx-csv/ngx-csv';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  @ViewChild('content',{static: false}) el!:ElementRef;
  public res1:any;
  public res2:any;
  public res3:any;
  public res4:any;
  public flag1:Number=1;
  public flag2:Number=0;
  public flag3:Number=0;
  public flag4:Number=0;
  constructor(private http:HttpClient,private router:Router){}
  ngOnInit(): void {
    if(localStorage.getItem('adminid') == null){
      console.log("ng");
      this.router.navigateByUrl('/login');
    }
    const url = 'http://127.0.0.1:5555/api/funds';
    this.http.get(url).subscribe((data) => {
    this.res1 = data;
    });
    const url2 = 'http://127.0.0.1:5555/api/fundaraisers';
    this.http.get(url2).subscribe((data) => {
    this.res2 = data;
    });
    const url3 = 'http://127.0.0.1:5555/api/donors';
    this.http.get(url3).subscribe((data) => {
    this.res3 = data;
    });
    const url4 = 'http://127.0.0.1:5555/api/get_all_transactions';
    this.http.get(url4).subscribe((data) => {
    this.res4 = data;
    console.log(this.res4);
    });
  }
  deleteFund(id:Number){
    const url4 = 'http://127.0.0.1:5555/api/del_fund';
    this.http.post(url4,{id:id}).subscribe((data) => {
    });
    for(var i = 0; i < this.res1.length; i++){
      if(this.res1[i]._id === id){
        this.res1.splice(i, 1);
      }
    }
  }
  logout(){
    localStorage.removeItem('adminid');
    this.router.navigateByUrl("/login");
  }
  showFunds(){
    this.flag1=1;
    this.flag2=0;
    this.flag3=0;
    this.flag4=0;
  }
  showFundraisers(){
    this.flag1=0;
    this.flag2=1;
    this.flag3=0;
    this.flag4=0;
  }
  showDonors(){
    this.flag1=0;
    this.flag2=0;
    this.flag3=1;
    this.flag4=0;
  }
  showTransactions(){
    this.flag1=0;
    this.flag2=0;
    this.flag3=0;
    this.flag4=1;
  }
  generateReport(){
    //var a={id:this.res3._id,fname:this.res3.fund_name,org:this.res3.org_name,dname:this.res3. donor_name,amount:this.res3.amount};
    var a=[{id:'transaction ID',fname:'fund_name',org:'org name',dname:'Donor name',amount:'amount'}];
    console.log(this.res4.length);
    for(var i=0;i<this.res4.length;i++){
      a.push({id:this.res4[i]._id,fname:this.res4[i].fund_name,org:this.res4[i].org_name,dname:this.res4[i]. donor_name,amount:this.res4[i].amount});
    }
    console.log("a"+a);
    new ngxCsv(a,'report');
  }

}
