import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'Home' },
  {
    path: 'Home',
    title: 'HOME',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'HOME' },
      {
        path: 'poke_details/:id',
        title: 'DETAILS',
        loadComponent: () => import('./home/detail/detail.component'),
      },

      { path: '**', redirectTo: 'HOME' },
    ],
  },
  {
    path: 'my_pokemon',
    title: 'MY POKEMON',
    loadComponent: () => import('./home/my-pokemon/my-pokemon.component'),
  },
  /*   {
    path: 'poke_details/:id',
    title: 'POKEMONS DETAILS',
    loadComponent: () => import('./home/detail/detail.component'),
  }, */
  { path: '**', redirectTo: 'Home' },
];
