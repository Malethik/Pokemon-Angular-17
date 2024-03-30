import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    title: 'HOME',
    loadComponent: () => import('./home/home/home.component'),
  },
  {
    path: 'pokemon',
    title: 'MY-POKEMON',
    loadComponent: () => import('./home/my-pokemon/my-pokemon.component'),
  },
  {
    path: 'details/:id',
    title: 'POKEMONS-DETAILS',
    loadComponent: () => import('./home/detail/detail.component'),
  },
  { path: '**', redirectTo: 'home' },
];
