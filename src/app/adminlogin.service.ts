import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminloginService {
  public static id:String;
  constructor(private http:HttpClient) { }
  static getId():String { return this.id;}
  static setId(value:String){this.id=value;}
}
