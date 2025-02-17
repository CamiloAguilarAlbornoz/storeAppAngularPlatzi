import { computed, Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public carts = signal<Product[]>([]);
  public total = computed(() => { // Señal que se crea a partir de otras
    const cart = this.carts();
    let totalCost = 0;
    cart.forEach(product => {
      totalCost += product.price;
    });
    return totalCost;
  });

  constructor() { }

  public addToCart(product: Product) : void {
    this.carts.update(prev => [...prev, product]);
  }
}
