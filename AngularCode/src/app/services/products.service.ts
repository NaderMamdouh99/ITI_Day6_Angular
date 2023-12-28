import { ProductList } from 'src/app/Models/products/productLists';
import { Injectable } from '@angular/core';
import { IProduct } from '../Models/products/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products:IProduct[];
  constructor() {
    this.products = ProductList;
  }

  getAll():IProduct []{
    return this.products
  }

  getbyid(id:number):IProduct|undefined {
    return this.products.find((prod)=>prod.id == id);
  }

  add(prod:IProduct):void{
    let nextId = this.products[this.products.length - 1].id + 1;
    prod.id = nextId;
    this.products.push(prod);
  }

  edit(id:number,prod:IProduct):void{
    let index= this.products.findIndex((p)=>p.id == id);
    if (index != -1) {
      this.products[index].name = prod.name;
      this.products[index].description = prod.description;
      this.products[index].price = prod.price;
      this.products[index].productBrand = prod.productBrand;
    }
  }

  delet(id:number):void {
    let index= this.products.findIndex((p)=>p.id == id);
    if (index != -1) {
      this.products.splice(index,1);
    }
  }
}
