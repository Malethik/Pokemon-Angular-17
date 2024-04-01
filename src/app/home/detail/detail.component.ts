import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../../core/model/pokemon';
import { StateService } from '../../core/service/storage/storage.service';
import { Species } from '../../core/model/species';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [DetailComponent],
  template: `
    <div [style.background-color]="backgroundColor" class="detail">
      <h2>{{ this.pokemonDetails.name.toUpperCase() }}</h2>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/{{
          pokemonId
        }}.png"
        alt="{{ this.pokemonDetails.name.toUpperCase() }}"
        height="100"
      />

      <div>
        <p>
          Color: {{ this.service.upFirstLetter(this.speciesDetail.color.name) }}
        </p>
        <p>Legendary:{{ this.speciesDetail.is_legendary ? ' Yes' : ' No' }}</p>
        <p>Mythical:{{ this.speciesDetail.is_mythical ? ' Yes' : ' No' }}</p>
      </div>
      <div>
        <p>Type:</p>
        <p>
          {{
            this.service.upFirstLetter(this.pokemonDetails.types[0].type.name)
          }}
        </p>
        @if (this.pokemonDetails.types.length > 1) {
        <p>
          {{
            this.service.upFirstLetter(this.pokemonDetails.types[1].type.name)
          }}
        </p>
        }
      </div>
      <div>
        <p>
          Description:
          {{ this.speciesDetail.flavor_text_entries[1].flavor_text }}
        </p>
      </div>
      <div>
        <p>BASE STAT:</p>
        <ul>
          <li>
            <p>HP:{{ this.pokemonDetails.stats[0].base_stat }}</p>
          </li>
          <li>
            <p>ATK:{{ this.pokemonDetails.stats[1].base_stat }}</p>
          </li>
          <li>
            <p>DEF:{{ this.pokemonDetails.stats[2].base_stat }}</p>
          </li>
          <li>
            <p>S. ATK:{{ this.pokemonDetails.stats[3].base_stat }}</p>
          </li>
          <li>
            <p>S. DEF:{{ this.pokemonDetails.stats[4].base_stat }}</p>
          </li>
          <li>
            <p>SPEED:{{ this.pokemonDetails.stats[5].base_stat }}</p>
          </li>
        </ul>
      </div>
      <div>
        <p>ABILITY</p>
        <p>
          {{
            this.service.upFirstLetter(
              this.pokemonDetails.abilities[0].ability.name
            )
          }}
        </p>
        @if (this.pokemonDetails.abilities.length > 1) {
        <p>
          {{
            this.service.upFirstLetter(
              this.pokemonDetails.abilities[1].ability.name
            )
          }}
        </p>
        }
      </div>
    </div>
  `,
  styleUrl: './detail.component.css',
})
export default class DetailComponent implements OnInit {
  pokemonId!: number;
  pokemonDetails!: Pokemon;
  speciesDetail!: Species;
  backgroundColor: string = 'white';
  public service = inject(StateService);

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(this.pokemonDetails);
      this.pokemonId = params['id'];
      this.service.getPokemonById(this.pokemonId).subscribe((pokemon) => {
        this.pokemonDetails = pokemon;
        console.log(this.pokemonDetails);
        //
        this.backgroundColor =
          this.service.backgroundColors[
            this.pokemonDetails.types[0].type.name
          ] || 'white';
        //
      });
      this.service
        .getPokemonSpeciesDetailsById(this.pokemonId)
        .subscribe((pokemon) => {
          this.speciesDetail = pokemon;
          console.log(this.speciesDetail);
        });
    });
  }
}
