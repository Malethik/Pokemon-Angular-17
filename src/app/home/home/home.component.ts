import { Component, OnInit, inject } from '@angular/core';
import { StateService } from '../../core/service/storage/storage.service';
import { Pokemon } from '../../core/model/pokemon';
import { CardComponent } from '../card/card.component';
import DetailComponent from '../detail/detail.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, DetailComponent, HomeComponent],

  template: ` <div class="navBar">
      <button type="button" class="previus" (click)="loadPreviusPage()">
        PREVIUS
      </button>
      <h2>Pokemon list:</h2>

      <button type="button" class="next" (click)="loadNextPage()">NEXT</button>
    </div>

    <div class="main">
      @for (item of pokemonList ; track item.id) {
      <app-card [pokemonInfo]="item" />
      }
    </div>`,
  styles: ``,
})
export default class HomeComponent implements OnInit {
  pokemonList: Pokemon[] = [];
  page = 0;
  public stateService = inject(StateService);
  constructor() {}

  ngOnInit(): void {
    this.fetchPokemonList();
  }

  loadNextPage() {
    this.page += 20;
    this.fetchPokemonList();
  }

  loadPreviusPage() {
    if (this.page >= 20) {
      this.page -= 20;
      this.fetchPokemonList();
    }
  }

  private fetchPokemonList() {
    this.stateService.fetchPokemonList(this.page, 20).subscribe(() => {
      this.stateService.pokemonList$.subscribe(
        (pokemonList) => (this.pokemonList = pokemonList)
      );
      console.log(this.pokemonList);
    });
  }
}
