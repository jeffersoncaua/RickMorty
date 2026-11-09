import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton,
         IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle,
         IonCardContent } from '@ionic/angular';

import { DestaqueHover } from '../../directives/destaque-hover';

interface Integrante {
  nome: string;
  papel: string;
  descricao: string;
}

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.page.html',
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton,
            IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,
            DestaqueHover],
})
export class EquipePage {
  integrantes: Integrante[] = [
    { nome: 'Heitor', papel: 'Páginas e rotas', descricao: '4 páginas, Home e parâmetro de rota.' },
    { nome: 'Jefferson', papel: 'Service da API', descricao: 'RickMorty com HttpClient e 3 métodos GET.' },
    { nome: 'Guilherme', papel: 'Service de favoritos', descricao: 'Favoritos com signal e localStorage.' },
    { nome: 'Flávia', papel: 'Pipes', descricao: '2 pipes customizadas e 2 built-in.' },
    { nome: 'Pedro', papel: 'Diretivas e controle de fluxo', descricao: '2 diretivas customizadas, @if e @for.' },
  ];
}