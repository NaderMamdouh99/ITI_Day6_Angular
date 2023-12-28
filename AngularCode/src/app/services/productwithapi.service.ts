import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../Models/products/iproduct';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductwithapiService {
baseUrl:string='http://localhost:3005/product';
  constructor(private http:HttpClient) {}
  getAll():Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.baseUrl);
  }

  getbyid(id:number):Observable<IProduct>{
    return this.http.get<IProduct>(`${this.baseUrl}/${id}`);
  }

  add(prod:IProduct){
    return this.http.post(this.baseUrl,prod);
  }

  edit(id:number,prod:IProduct){
    return this.http.put(`${this.baseUrl}/${id}`,prod);
  }

  delet(id:number){
    return this.http.delete(`${this.baseUrl}/${id}`)
  }
}
