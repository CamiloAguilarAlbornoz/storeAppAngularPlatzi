import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, signal, Signal } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { CorrectImagePipe } from '@shared/pipes/correct-image.pipe';
import { CartService } from '@shared/service/cart.service';
import { ProductService } from '@shared/service/product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CorrectImagePipe, CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {

  @Input()
  public id?: string;
  public product = signal<Product | null>(null);
  public cover = signal<string>('');

  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    if (!this.id) return;
    this.productService.getOne(this.id)
      .subscribe(
        {
          next: (product) => {
            this.product.set(product);
            if (product.images.length > 0) {
              this.cover.set(product.images[0]);
            }
          }
        }
      );
  }

  public changeCover(image: string) {
    this.cover.set(image);
  }

  public addCartHandler() {
    const product = this.product();
    if (!product) return;
    this.cartService.addToCart(product);
  }
}
