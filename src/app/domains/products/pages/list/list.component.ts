import { Component, OnInit, signal } from '@angular/core';
import { ProductService } from '@shared/service/product.service';
import { CartService } from '@shared/service/cart.service';
import { Product } from '@shared/models/product.model';
import { ProductComponent } from '@products/components/product/product.component';
import { CategoryService } from '@shared/service/category.service';
import { Category } from '@shared/models/category.model';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, RouterLinkWithHref],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {

  public products = signal<Product[]>([]);
  public categories = signal<Category[]>([]);

  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  public addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }

  private getCategories() {
    this.categoryService.getAll().subscribe(
      {
        next: categories => this.categories.set(categories),
        error: () => {}
      }
    );
  }

  private getProducts() {
    this.productService.getProducts().subscribe(
      {
        next: products => this.products.set(products),
        error: () => {}
      }
    );
  }
}
