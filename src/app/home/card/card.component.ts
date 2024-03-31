import { Component, Input } from '@angular/core';
import { Pokemon } from '../../core/model/pokemon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  template: `
    <div class="pokemon" (click)="goDetails(pokemonInfo.id)">
      <p>{{ pokemonInfo.id }}</p>

      <p>{{ pokemonInfo.name.toUpperCase() }}</p>
      <p>Weight: {{ pokemonInfo.weight }} Gr</p>
      <p>Height: {{ pokemonInfo.height }} Cm</p>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/{{
          pokemonInfo.id
        }}.png"
        alt="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/{{
          pokemonInfo.id
        }}.png"
        width="100"
        height="100"
      />
    </div>
  `,
  styles: ``,
})
export class CardComponent {
  @Input() pokemonInfo!: Pokemon;
  constructor(private router: Router) {}
  goDetails(id: number) {
    this.router.navigate([`/details/${id}`]);
  }
}

/*  https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1000.png */

/* https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1000.png */
