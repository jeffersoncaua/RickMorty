import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'statusPt' })
export class StatusPtPipe implements PipeTransform {
  transform(valor: string): string {
    const mapa: Record<string, string> = {
      Alive: 'Vivo',
      Dead: 'Morto',
      unknown: 'Desconhecido',
    };
    return mapa[valor] ?? valor;
  }
}