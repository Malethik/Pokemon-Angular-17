import { Component, Input } from '@angular/core';
import { Pokemon } from '../../core/model/pokemon';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  template: `
    <div class="pokemon">
      <p></p>

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
}
/*  https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1000.png */

/* https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1000.png */
