import { Component, Injector, OnInit, inject } from '@angular/core';
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
  private Apiservice = inject(ApiService);

  constructor(private apiService: ApiService) {
    this.Apiservice.getData();
  }

  ngOnInit(): void {
    this.apiService.pokemonList$.subscribe(
      (pokemonList) => {
        this.pokemonList = pokemonList;
      },
      (error) => {
        console.error('Error fetching Pokemon list:', error);
      }
    );
  }
}
