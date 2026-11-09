import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./home/home.page').then(m => m.HomePage) },
  { path: 'personagens', loadComponent: () => import('./pages/personagens/personagens.page').then(m => m.PersonagensPage) },
  { path: 'detalhes/:id', loadComponent: () => import('./pages/detalhes/detalhes.page').then(m => m.DetalhesPage) },
  { path: 'episodios', loadComponent: () => import('./pages/episodios/episodios.page').then(m => m.EpisodiosPage) },
  { path: 'equipe', loadComponent: () => import('./pages/equipe/equipe.page').then(m => m.EquipePage) },
];