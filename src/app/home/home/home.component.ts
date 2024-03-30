import { Component, OnInit, inject } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { ApiService } from '../../core/service/api/api.service';
import { Pokemon } from '../../core/model/pokemon';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import DetailComponent from '../detail/detail.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, DetailComponent, HomeComponent],
  template: `
    <div class="navBar">
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
    </div>
  `,
  styles: ``,
})
export default class HomeComponent implements OnInit {
  pokemonList: Pokemon[] = [];

  page = 0;
  private Apiservice = inject(ApiService);
  constructor() {}

  loadNextPage() {
    this.page += 20;
    this.ngOnInit();
  }
  loadPreviusPage() {
    this.page -= 20;
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.Apiservice.getPokemonList(this.page, 20).subscribe((pokemonList) => {
      this.Apiservice.fetchDetailedPokemonData(pokemonList).subscribe(
        (detailedPokemonList) => {
          this.pokemonList = detailedPokemonList;
        }
      );
    });
  }
}
