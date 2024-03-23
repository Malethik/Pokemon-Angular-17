import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  template: `
    <div class="pokemon">
      <p>PokemonID</p>
      <img src="../assets/heart.png" alt="" class="hearts" />
      <p>Pokemon name</p>
      <p>Type: Pokemon type</p>
      <img src="" alt="" />
    </div>
  `,
  styles: ``,
})
export class CardComponent {}
