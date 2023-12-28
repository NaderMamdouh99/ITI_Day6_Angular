import { ProductsService } from './../../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Models/products/iproduct';
import { ProductwithapiService } from 'src/app/services/productwithapi.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

Products:IProduct[] = [];
constructor(private productservices:ProductwithapiService){}
ngOnInit(): void {
  this.productservices.getAll().subscribe({
    next:(data) => {this.Products = data},
    error:(err) => console.log('Error' + err),
    complete:() => console.log('complete')
  })
}
Delete(id:number){
  var result = confirm('Do You Need Delete This Product');
  if (result) {
    this.productservices.delet(id).subscribe();
    this.productservices.getAll().subscribe(
      (data) => {this.Products = data},
      (err) => console.log('Error' + err),
      () => console.log('complete')
    )
  }
}
}
