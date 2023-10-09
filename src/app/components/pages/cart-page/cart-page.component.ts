import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'bs-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit{
  cartItems: Product[] = [];
  constructor(private cartService: CartService) {
    cartService.OnCartChange.subscribe(() => {
      this.loadCartData();
    });
  };

  ngOnInit(): void {
    this.loadCartData();
  };

  loadCartData() {
    this.cartItems = this.cartService.cart;
  };

  getTotalPrice() {
    return this.cartService.getTotalPrice();
  };

  removeProduct(productId: string) {
    this.cartService.removeProduct( productId );
  };
}
