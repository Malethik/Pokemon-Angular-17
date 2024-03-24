import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'Home' },
  {
    path: 'Home',
    title: 'HOME',
    loadComponent: () => import('../app/home/home/home.component'),
  },
  {
    path: 'my_pokemon',
    title: 'MY POKEMON',
    loadComponent: () => import('./home/my-pokemon/my-pokemon.component'),
  },
  {
    path: 'poke_details/:id',
    title: 'POKEMONS DETAILS',
    loadComponent: () => import('./home/detail/detail.component'),
  },
  { path: '**', redirectTo: 'Home' },
];
