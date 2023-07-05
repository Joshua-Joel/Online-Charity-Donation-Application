import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FundraiserloginService {
  public static email:String;
  public static orgname:String;
  public static id:Number;
  constructor(private http:HttpClient) { }
  static getId():any { return {email:this.email,org:this.orgname,id:this.id};}
  static setId(email:String,org:String,id:Number){this.email=email;this.orgname=org;this.id=id}
}
