import { Component, Input } from '@angular/core';
import { ProductService } from '@shared/service/product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  @Input()
  public id?: string;

  constructor(
    private productService: ProductService
  ) {}
}
