import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({ selector: '[appDestaqueHover]' })
export class DestaqueHover {
  private el = inject(ElementRef);

  constructor() {
    this.el.nativeElement.style.transition = 'transform 0.2s';
  }

  @HostListener('mouseenter')
  entrar() {
    this.el.nativeElement.style.transform = 'scale(1.03)';
  }

  @HostListener('mouseleave')
  sair() {
    this.el.nativeElement.style.transform = 'scale(1)';
  }
}