import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'correctImage',
  standalone: true
})
export class CorrectImagePipe implements PipeTransform {

  transform(value?: string): string {
    if (!value) return '';
    let cleanedImage = value.replace(/^\["?|"?]$/g, '');
    try {
      cleanedImage = JSON.parse(cleanedImage);
    } catch (error) {
      //
    }
    return cleanedImage;
  }

}
