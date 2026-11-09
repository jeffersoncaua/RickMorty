import type { OnInit} from '@angular/core';
import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar,
         IonList, IonItem, IonAvatar, IonLabel, IonSpinner, IonNote,
         IonButtons, IonBackButton } from '@ionic/angular';
import type { Subscription } from 'rxjs';

import { DestaqueHover } from '../../directives/destaque-hover';
import { StatusBorda } from '../../directives/status-borda';
import type { Personagem } from '../../models/rick-morty';
import { EspeciePipe } from '../../pipes/especie-pipe';
import { StatusPtPipe } from '../../pipes/status-pt-pipe';
import { RickMorty } from '../../services/rick-morty';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.page.html',
  imports: [RouterLink, IonHeader, IonToolbar, IonTitle, IonContent,
            IonSearchbar, IonList, IonItem, IonAvatar, IonLabel, IonSpinner, IonNote,
            IonButtons, IonBackButton,
            StatusPtPipe, EspeciePipe, StatusBorda, DestaqueHover],
})
export class PersonagensPage implements OnInit {
  private api = inject(RickMorty);
  private pedidoAtual?: Subscription;
  personagens = signal<Personagem[]>([]);
  carregando = signal(false);
  erro = signal(false);

  ngOnInit() { this.buscar(); }

  buscar(nome = '') {
    this.pedidoAtual?.unsubscribe();
    this.carregando.set(true);
    this.erro.set(false);
    this.pedidoAtual = this.api.getPersonagens(1, nome.trim()).subscribe({
      next: r => { this.personagens.set(r.results); this.carregando.set(false); },
      error: () => { this.personagens.set([]); this.erro.set(true); this.carregando.set(false); },
    });
  }
}