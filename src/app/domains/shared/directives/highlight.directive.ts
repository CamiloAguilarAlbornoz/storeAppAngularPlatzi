import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]',
  standalone: true
})
export class HighlightDirective implements OnInit {

  constructor(
    private element: ElementRef
  ) { }

  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = "red";
  }
}
