import { UpperCasePipe, TitleCasePipe } from '@angular/common';
import type { OnInit} from '@angular/core';
import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton,
         IonSpinner, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle,
         IonCardContent, IonChip, IonButton } from '@ionic/angular';

import type { Personagem } from '../../models/rick-morty';
import { EspeciePipe } from '../../pipes/especie-pipe';
import { StatusPtPipe } from '../../pipes/status-pt-pipe';
import { Favoritos } from '../../services/favoritos';
import { RickMorty } from '../../services/rick-morty';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton,
            IonSpinner, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle,
            IonCardContent, IonChip, IonButton,
            UpperCasePipe, TitleCasePipe, StatusPtPipe, EspeciePipe],
})
export class DetalhesPage implements OnInit {
  private route = inject(ActivatedRoute);
  private api = inject(RickMorty);
  fav = inject(Favoritos);
  personagem = signal<Personagem | null>(null);

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.api.getPersonagemPorId(id).subscribe(p => this.personagem.set(p));
  }
}