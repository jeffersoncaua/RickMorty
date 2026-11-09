import { Directive, ElementRef, effect, inject, input } from '@angular/core';

@Directive({ selector: '[appStatusBorda]' })
export class StatusBorda {
  appStatusBorda = input<string>('');
  private el = inject(ElementRef);

  constructor() {
    effect(() => {
      const cores: Record<string, string> = {
        Alive: '#2ecc71',
        Dead: '#e74c3c',
        unknown: '#95a5a6',
      };
      const cor = cores[this.appStatusBorda()] ?? '#95a5a6';
      this.el.nativeElement.style.borderLeft = `6px solid ${cor}`;
    });
  }
}