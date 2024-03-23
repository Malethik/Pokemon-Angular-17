import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { ApiService } from '../../core/service/api/api.service';
import { Pokemon } from '../../core/model/pokemon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent],
  template: `<div class="main">
    @for (item of pokemonList ; track $index) {
    <app-card [pokemonInfo]="item" />
    }
  </div>`,
  styles: ``,
})
export class HomeComponent implements OnInit {
  pokemonList: Pokemon[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getPokemonList().subscribe((pokemonList) => {
      this.apiService
        .fetchDetailedPokemonData(pokemonList)
        .subscribe((detailedPokemonList) => {
          this.pokemonList = detailedPokemonList;
        });
    });
  }
}
