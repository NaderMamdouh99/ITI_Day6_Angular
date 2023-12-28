import { ActivatedRoute, Route, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Models/products/iproduct';
import { ProductsService } from 'src/app/services/products.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductwithapiService } from 'src/app/services/productwithapi.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
productForm: FormGroup = new FormGroup({
  id:new FormControl(0),
  name:new FormControl('',[Validators.required,Validators.minLength(3)]),
  description:new FormControl('',[Validators.required,Validators.minLength(5)]),
  price:new FormControl(0,[Validators.required,Validators.min(1000),Validators.max(50000)]),
  productBrand:new FormControl('',[Validators.required,Validators.minLength(5)]),
  image:new FormControl('',[Validators.required])
})
productId:number=0;


constructor(private activatedRoute:ActivatedRoute,private productServices:ProductwithapiService,private roote:Router){}
get nameControl (){
  return this.productForm.controls['name'];
}
get descriptionControl(){
  return this.productForm.controls['description'];
}
get priceControl(){
  return this.productForm.controls['price'];
}
get productBrandControl(){
  return this.productForm.controls['productBrand'];
}
get imageControl(){
  return this.productForm.controls['image'];
}


  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.params['id'];
    if (this.productId > 0) {
      this.productServices.getbyid(this.productId).subscribe((data)=>{
        this.productForm.controls['name'].setValue(data.name);
        this.productForm.controls['description'].setValue(data.description);
        this.productForm.controls['price'].setValue(data.price);
        this.productForm.controls['productBrand'].setValue(data.productBrand);
        this.productForm.controls['image'].setValue(data.image);
      })
    }
  }
GetData(e:Event){
  e.preventDefault();
  if (this.productForm.valid) {
    if (this.productId>0) {
      // edit
      this.productServices.edit(this.productId,this.productForm.value).subscribe();
    }else{
      // add
      this.productServices.add(this.productForm.value).subscribe();
    }
    this.roote.navigate(['/product']);
  }
}
}
