import { Component } from '@angular/core';
import { IProduct } from 'src/app/Models/products/iproduct';
import { ProductwithapiService } from 'src/app/services/productwithapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  Products:IProduct[] = [];
  constructor(private productservices:ProductwithapiService){}
  ngOnInit(): void {
    this.productservices.getAll().subscribe({
      next:(data) => {this.Products = data},
      error:(err) => console.log('Error' + err),
      complete:() => console.log('complete')
    })
  }

}
