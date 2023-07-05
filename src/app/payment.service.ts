import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  public id!:Number;
  public fname!:String;
  public forg!:String;
  constructor(private http:HttpClient) { }
  getDetails():Object { return {id:this.id,fname:this.fname,forg:this.forg};}
  setDetails(id:Number,fname:String,forg:String){this.id=id;this.fname=fname;this.forg=forg;}
}
