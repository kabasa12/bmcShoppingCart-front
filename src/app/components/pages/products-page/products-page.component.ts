import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'bs-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {
  products: Product[] = [];
  
  constructor(private productService: ProductsService) { };

  ngOnInit(): void {
    this.productService.getProducts().subscribe(response => {
      if (response.success) {
        this.products = response.data;
      }
    });
  }

}
