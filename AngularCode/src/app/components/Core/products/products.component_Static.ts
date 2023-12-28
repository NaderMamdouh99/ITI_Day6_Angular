import { ProductsService } from '../../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Models/products/iproduct';
import { ProductList } from 'src/app/Models/products/productLists';

@Component({
  selector: 'app-products',
  template: '<h1>welcome</h1>',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
Products:IProduct[] = [];
constructor(private productservice:ProductsService){}
  ngOnInit(): void {
    this.Products = this.productservice.getAll();
  }

  Delete(id:number){
    var result = confirm('Do You Need Delete This Product');
    if (result) {
      this.productservice.delet(id);
    }
  }
}
