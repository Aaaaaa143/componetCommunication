import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  product:any

  constructor(private http:HttpClient){

    this.http.get("https://fakestoreapi.com/products/").subscribe(data=>this.product=data)
  }

}
