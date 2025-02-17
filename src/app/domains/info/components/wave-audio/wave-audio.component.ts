import { AfterViewInit, Component, ElementRef, Inject, Input, PLATFORM_ID, signal, ViewChild } from '@angular/core';

import WaveSurfer from 'wavesurfer.js';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-wave-audio',
  standalone: true,
  imports: [],
  templateUrl: './wave-audio.component.html',
  styleUrl: './wave-audio.component.css'
})
export class WaveAudioComponent implements AfterViewInit {

  @Input({required: true})
  public audioUrl!: string;

  @ViewChild('wave')
  public wave!: ElementRef<HTMLDivElement>;

  private waveSurfer!: WaveSurfer;
  public isPlaying= signal(false);

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.waveSurfer = WaveSurfer.create({
        url: this.audioUrl,
        container: this.wave.nativeElement
      });
      this.waveSurfer.on('play', () => this.isPlaying.set(true));
      this.waveSurfer.on('pause', () => this.isPlaying.set(false));
    }
  }

  public playPause() {
    this.waveSurfer.playPause();
  }
}
