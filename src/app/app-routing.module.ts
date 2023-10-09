import { NgModule } from '@angular/core';
import { RouterModule, Routes, mapToCanActivate } from '@angular/router';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { ProductsPageComponent } from './components/pages/products-page/products-page.component';
import { CategoriesPageComponent } from './components/pages/categories-page/categories-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { LoginGuard } from './services/login.gurd';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'products',
    canActivate: mapToCanActivate([LoginGuard]),
    component: ProductsPageComponent
  },
  {
    path: 'categories',
    canActivate: mapToCanActivate([LoginGuard]),
    component: CategoriesPageComponent
  },
  {
    path: 'categories/:id',
    canActivate: mapToCanActivate([LoginGuard]),
    component: CategoriesPageComponent
  },
  {
    path: 'cart',
    canActivate: mapToCanActivate([LoginGuard]),
    component: CartPageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
