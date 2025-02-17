import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { ReversePipe } from '@shared/pipes/reverse.pipe';
import { CorrectImagePipe } from '@shared/pipes/correct-image.pipe';
import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ReversePipe, CorrectImagePipe, TimeAgoPipe, RouterLinkWithHref],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  @Input({alias:'product', required: true})
  public product!: Product;

  @Output('addToCar')
  public addToCar = new EventEmitter();

  constructor() {
  }

  public addCartHandler(): void {
    this.addToCar.emit(this.product);
  }
}
