import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService{
  public static id:string;
  constructor(private http:HttpClient) { }
  static getId():string { console.log("service"+this.id);return this.id;}
  static setId(value:string){this.id=value;}
}
