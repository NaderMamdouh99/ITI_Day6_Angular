import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/Models/products/iproduct';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-prodctdetails',
  templateUrl: './prodctdetails.component.html',
  styleUrls: ['./prodctdetails.component.css']
})
export class ProdctdetailsComponent implements OnInit {
  ProductId:number = 0;
  Product:IProduct|undefined;

  constructor(private activatedRoute:ActivatedRoute,private prodService:ProductsService){}


  ngOnInit(): void {
    this.ProductId = this.activatedRoute.snapshot.params['id'];
    this.Product = this.prodService.getbyid(this.ProductId);
  }
}
