import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  @Input({alias:'img', required: true})
  public img: string;

  @Input({alias:'price', required: true})
  public price: number;

  @Input({alias:'title', required: true})
  public title: string;

  @Output('addToCar')
  public addToCar = new EventEmitter();

  constructor() {
    this.img = '';
    this.price = 0;
    this.title = '';
  }

  public addCartHandler(): void {
    console.log('click from child');
    this.addToCar.emit(`Hola, éste es un mensaje desde el hijo ${this.title}`);
  }
}
