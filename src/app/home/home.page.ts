import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader,
         IonCardTitle, IonCardSubtitle, IonCardContent, IonButton,
         IonChip } from '@ionic/angular';

import { DestaqueHover } from '../directives/destaque-hover';
import { Favoritos } from '../services/favoritos';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [RouterLink, IonHeader, IonToolbar, IonTitle, IonContent, IonCard,
            IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,
            IonButton, IonChip, DestaqueHover],
})
export class HomePage {
  fav = inject(Favoritos);
}