import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <header class="header">
      <h1><img src="../../assets/pokemon-logo.svg" alt="Pokedex" /></h1>
      <nav>
        <a href="#">MY POKEMON</a>
      </nav>
    </header>
  `,
  styles: ``,
})
export class HeaderComponent {}
