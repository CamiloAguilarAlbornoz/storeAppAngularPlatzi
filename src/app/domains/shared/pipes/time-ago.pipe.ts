import { Pipe, PipeTransform } from '@angular/core';
import { formatDistance } from 'date-fns'

@Pipe({
  name: 'timeAgo',
  standalone: true
})
export class TimeAgoPipe implements PipeTransform {

  // =========== Mi solución ===================
  // transform(fechaStr: string | null): string {
  //   if (fechaStr) {
  //     const fechaDada = new Date(fechaStr);
  //     const ahora = new Date();
  //     const diferenciaMs = ahora.getTime() - fechaDada.getTime();
  //     const segundos = Math.floor(diferenciaMs / 1000);
  //     const minutos = Math.floor(segundos / 60);
  //     const horas = Math.floor(minutos / 60);
  //     const dias = Math.floor(horas / 24);
  //     if (dias > 0) return `${dias} días`;
  //     if (horas > 0) return `${horas} horas`;
  //     if (minutos > 0) return `${minutos} minutos`;
  //     return `${segundos} segundos`;
  //   }
  //   return '';
  // }

  transform(value: string | null): string {
    if (!value) return '';
    const date = new Date(value);
    const today = new Date();
    return formatDistance(today, date);
  }

}
