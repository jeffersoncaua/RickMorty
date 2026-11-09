import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Favoritos {
  favoritos = signal<number[]>(JSON.parse(localStorage.getItem('favoritos') ?? '[]'));

  alternar(id: number) {
    const atual = this.favoritos();
    const novo = atual.includes(id) ? atual.filter(f => f !== id) : [...atual, id];
    this.favoritos.set(novo);
    localStorage.setItem('favoritos', JSON.stringify(novo));
  }

  ehFavorito(id: number): boolean {
    return this.favoritos().includes(id);
  }
}