import { ActivatedRoute, Route, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Models/products/iproduct';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-form',
  template: '<h1>Wellcom</h1>',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
product:IProduct ={
  id:0,
  name:'',
  description:'',
  price:0,
  productBrand:''
}
productId:number=0;
constructor(private productservice:ProductsService,private actavetedservice:ActivatedRoute,private roote:Router){}
  ngOnInit(): void {
    this.productId = this.actavetedservice.snapshot.params['id'];
    if (this.productId != 0) {
      let prod = this.productservice.getbyid(this.productId);
      if (prod) {
        this.product = prod;
      }
    }
  }
GetData(e:Event){
  e.preventDefault();
  console.log(this.product);

  if (this.productId) {
    this.productservice.edit(this.productId,this.product);
  }else{
    this.productservice.add(this.product);
  }

this.roote.navigate(['/product']);

}
}
