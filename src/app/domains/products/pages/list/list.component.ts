import { Component, OnInit, signal } from '@angular/core';
import { ProductService } from '@shared/service/product.service';
import { CartService } from '@shared/service/cart.service';
import { Product } from '@shared/models/product.model';
import { HeaderComponent } from '@shared/components/header/header.component';
import { ProductComponent } from '@products/components/product/product.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [HeaderComponent, ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {

  public products = signal<Product[]>([]);

  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      {
        next: (products) => {
          this.products.set(products);
        },
        error: () => {

        }
      }
    )
  }

  public addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }
}
