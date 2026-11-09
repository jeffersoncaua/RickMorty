import { DatePipe } from '@angular/common';
import type { OnInit} from '@angular/core';
import { Component, inject, signal } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton,
         IonSpinner, IonList, IonItem, IonLabel, IonNote, IonBadge,
         IonButton } from '@ionic/angular';

import { DestaqueHover } from '../../directives/destaque-hover';
import type { Episodio } from '../../models/rick-morty';
import { RickMorty } from '../../services/rick-morty';

@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.page.html',
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton,
            IonSpinner, IonList, IonItem, IonLabel, IonNote, IonBadge, IonButton,
            DatePipe, DestaqueHover],
})
export class EpisodiosPage implements OnInit {
  private api = inject(RickMorty);
  episodios = signal<Episodio[]>([]);
  carregando = signal(false);
  erro = signal(false);
  pagina = 1;
  temMais = signal(false);

  ngOnInit() { this.carregar(); }

  carregar() {
    this.carregando.set(true);
    this.erro.set(false);
    this.api.getEpisodios(this.pagina).subscribe({
      next: r => {
        this.episodios.update(lista => [...lista, ...r.results]);
        this.temMais.set(r.info.next !== null);
        this.carregando.set(false);
      },
      error: () => { this.erro.set(true); this.carregando.set(false); },
    });
  }

  carregarMais() {
    this.pagina++;
    this.carregar();
  }

  // air_date vem como texto ("December 2, 2013"); o pipe date precisa de um Date
  paraData(texto: string): Date {
    return new Date(texto);
  }
}