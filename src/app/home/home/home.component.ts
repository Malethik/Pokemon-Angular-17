import { Component, OnInit, inject } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { ApiService } from '../../core/service/api/api.service';
import { Pokemon } from '../../core/model/pokemon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent],
  template: ` <div class="navBar">
      <button type="button" class="previus">PREVIUS</button>
      <h2>Pokemon list:</h2>
      <button type="button" class="next" (click)="loadNextPage()">NEXT</button>
    </div>

    <div class="main">
      @for (item of pokemonList ; track $index) {
      <app-card [pokemonInfo]="item" />
      }
    </div>`,
  styles: ``,
})
export class HomeComponent implements OnInit {
  pokemonList: Pokemon[] = [];
  page = 0;
  private Apiservice = inject(ApiService);
  constructor(private apiService: ApiService) {
    this.Apiservice.getData();
  }
  loadNextPage() {
    this.page += 20;
    this.ngOnInit();
  }
  loadPreviusPage() {
    this.page -= 20;
    this.ngOnInit();
  }
  /*  goToDetails(id: number) {
    this.router.navigate([`/poke_details/${id}`]);
  } */

  ngOnInit(): void {
    this.apiService.getPokemonList(this.page, 20).subscribe((pokemonList) => {
      this.apiService
        .fetchDetailedPokemonData(pokemonList)
        .subscribe((detailedPokemonList) => {
          this.pokemonList = detailedPokemonList;
        });
    });
  }
}
