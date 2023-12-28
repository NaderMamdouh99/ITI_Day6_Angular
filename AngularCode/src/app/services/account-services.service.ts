import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUsers } from '../Models/iusers';

@Injectable({
  providedIn: 'root'
})
export class AccountServicesService {
  baseUrl:string='http://localhost:3005/users'
  check:boolean = false;
  user:{email:string,password:string}|undefined;
  constructor(private http:HttpClient) { }
  login(email :string , password: string){
    this.user = {email,password};
    this.check = true;
  }
  add(Uesr:IUsers){
    return this.http.post(this.baseUrl,Uesr)
  }
  get isAuthenticated(){
    return this.check;
  }

  logOut(){
    this.user=undefined;
    this.check = false;
  }
}
