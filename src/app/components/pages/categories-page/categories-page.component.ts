import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/Category';
import { Product } from 'src/app/models/Product';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'bs-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.css']
})
export class CategoriesPageComponent  implements OnInit{
  products: Product[] = [];
  category: Category = {
    id: undefined ?? '',
    name: ''
  };

  constructor(
    private categoriesService: CategoriesService,
    private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.category.id = params.get('id') ?? '';
      this.initCategory();
    });
  };
  
  ngOnInit(): void {
    console.log('ngOnInit of categories page');
    this.initCategory();
  };

  initCategory() {
    //  Get category object
    this.categoriesService.getCategoryById(this.category.id).subscribe(response => {
      if (response.success) {
        this.category = response.data
      };
    });

    //  Get category products
    this.categoriesService.getCategoryProducts(this.category.id).subscribe(response => {
      if (response.success) {
        this.products = response.data
      };
    });
  };
}
