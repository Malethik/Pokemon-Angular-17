import { Component, Input } from '@angular/core';
import { Pokemon } from '../../core/model/pokemon';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  template: `
    <div class="pokemon">
      <p></p>
      <img
        src="../assets/heart.png"
        alt=""
        class="hearts"
        height="10"
        width="10"
      />
      <p>{{ pokemonInfo.name }}</p>
      <p>Type: {{ pokemonInfo.id }}</p>
      <img src="" alt="" />
    </div>
  `,
  styles: ``,
})
export class CardComponent {
  @Input() pokemonInfo!: any;
}
