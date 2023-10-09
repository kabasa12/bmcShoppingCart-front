import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/models/Category';
import { CartService } from 'src/app/services/cart.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy{
  
  cartItems: number = 0;
  categories: Category[] = [];
  errorMessage: string = '';
  logText: string = 'Login';
  sub!: Subscription;

  constructor(
    private categoriesService:CategoriesService,
    private cart: CartService,
    private auth: LoginService,
    private router:Router,
  ) {
    cart.OnCartChange.subscribe(() => {
      this.updateTotalItems();
    });
    auth.OnChangeLogin.subscribe(() => {
      this.logText = auth.isLoggedIn() ? 'Logout' : 'Login';
    });
  };

  ngOnInit(): void {
    this.updateTotalItems();
    this.sub = this.categoriesService.getCategories().subscribe({
      next:response => {
        if (response.success) {
          this.categories = response.data
        }
      },
      error: err => this.errorMessage = err
    });
  };

  updateTotalItems() {
    this.cartItems = this.cart.getTotalItems();
  };

  onCategoryChange(categoryId: string) {
    console.log('Category changed to ' + categoryId)
    this.categoriesService.changeCategory(categoryId);
  };

  onLogClick() {
    const isLogged = this.auth.isLoggedIn();
    if (isLogged) {
      this.auth.onLogout();
      this.router.navigate(['/home']);
      this.logText = 'Login';
      localStorage.removeItem('currentUser');
      this.cart.emptyCart();
    }
    else
      this.router.navigate(['/login']);
  };

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  };

}
