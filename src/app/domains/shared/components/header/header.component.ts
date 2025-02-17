import { Component, inject, Inject, Signal, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { CartService } from '../../service/cart.service';
import { RouterLinkWithHref, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  public hideSideMenu = signal(true);
  public carts: Signal<Product[]>;
  public totalCost: Signal<number>;

  constructor(
    private cartService: CartService
  ) {
    this.carts = this.cartService.carts;
    this.totalCost = this.cartService.total;
  }

  public toggleSideMenu(): void {
    this.hideSideMenu.update(prevState => !prevState);
  }
}
