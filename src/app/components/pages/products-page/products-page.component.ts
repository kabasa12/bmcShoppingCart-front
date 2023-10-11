import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/Product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'bs-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit, OnDestroy{
  products: Product[] = [];
  sub!: Subscription;
  constructor(private productService: ProductsService) { };

  ngOnInit(): void {
    this.sub = this.productService.getProducts().subscribe(response => {
      if (response.success) {
        this.products = response.data;
      }
    });
  };

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  };

}
