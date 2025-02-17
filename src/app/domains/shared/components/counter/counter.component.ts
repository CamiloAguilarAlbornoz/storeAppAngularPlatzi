import { AfterViewInit, Component, Input, OnChanges, OnDestroy,
  OnInit, signal, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements OnChanges, OnInit, AfterViewInit, OnDestroy {

  @Input({required: true})
  public duration: number = 0;

  @Input({required: true})
  public message: string = '';

  constructor() {
    // No async
    // Se ejecuta antes de renderizar el contenido del componente
    console.log('constructor');
    console.log('-'.repeat(10));
  }

  public ngOnChanges(changes: SimpleChanges): void {
    // Se ejecuta antes y durante la renderización del contenido del componente
    console.log('onChanges');
    console.log('-'.repeat(10));
    console.log(changes);
    const duration = changes['duration'];
    if (duration && duration.currentValue !== duration.previousValue) {
      this.doSomething(duration);
    }
  }

  ngOnInit(): void {
    // se ejecuta despues de la renderización del componente
    // solo se ejecuta una vez
    // permite promesas, async, etc
    console.log('onInit');
    console.log('-'.repeat(10));
    console.log('duration => ', this.duration);
    console.log('message => ', this.message);
  }

  ngAfterViewInit(): void {
    // Se ejecuta despues del onInit
    // Se ejecuta cuando los hijos del componente ya se renderizaron
    console.log('AfterViewInit');
    console.log('-'.repeat(10));
  }

  ngOnDestroy(): void {
    // Se ejecuta cuando el componente se destruye
    console.log('OnDestroy');
    console.log('-'.repeat(10));
  }

  public doSomething(duration: SimpleChange): void {
    console.log('-'.repeat(10), ' ' , duration, ' ', '-'.repeat(10));
  }
}
