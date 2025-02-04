import { Component } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public img: string = 'https://picsum.photos/640/640?r=' + Math.random();

  public fromChild(event: string): void {
    console.log('Estamos en el padre : ', event);
  }
}
