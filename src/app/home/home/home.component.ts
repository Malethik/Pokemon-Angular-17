import { Component, OnInit } from '@angular/core';
import { ApiPokemonService } from '../../core/service/api/api-pokemon.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: ` <p>home works!</p> `,
  styles: ``,
})
export class HomeComponent {
  data: any;
  constructor(private ApiService: ApiPokemonService) {}
}
