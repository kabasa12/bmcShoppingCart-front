import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'bs-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product!: Product ;
  
  constructor(private cart: CartService) { };

  addToCart(product:Product) {
    this.cart.addProduct(product);
  };
}
