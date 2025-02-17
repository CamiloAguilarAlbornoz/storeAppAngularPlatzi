import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { CounterComponent } from '@shared/components/counter/counter.component';
import { WaveAudioComponent } from '@info/components/wave-audio/wave-audio.component';
import { HighlightDirective } from '@shared/directives/highlight.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CounterComponent, WaveAudioComponent, HighlightDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export default class AboutComponent {

  @ViewChild('durationInput')
  private durationInput!: ElementRef<HTMLInputElement>;

  @ViewChild('messageInput')
  private messageInput!: ElementRef<HTMLInputElement>;

  public duration = signal(1000);
  public message = signal('Hola');

  public changeDuration(): void {
    const input = this.durationInput.nativeElement.value;
    this.duration.set(parseInt(input));
  }

  public changeMessage(): void {
    const input = this.messageInput.nativeElement.value;
    this.message.set(input);
  }
}
