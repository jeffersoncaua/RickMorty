import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'especie' })
export class EspeciePipe implements PipeTransform {
  transform(valor: string): string {
    const mapa: Record<string, string> = {
      Human: 'Humano',
      Alien: 'Alienígena',
      Robot: 'Robô',
      Animal: 'Animal',
      Humanoid: 'Humanoide',
      Disease: 'Doença',
      Cronenberg: 'Cronenberg',
      unknown: 'Desconhecida',
    };
    return mapa[valor] ?? valor;
  }
}