import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, mergeMap, toArray } from 'rxjs/operators';
import { Pokemon, PokemonResults } from '../../model/pokemon';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private APIURL = 'https://pokeapi.co/api/v2/';
  offset = 0;
  pokemonList: Pokemon[] = [];
  constructor(private http: HttpClient) {}

  updateOffset(newOffset: number): void {
    this.offset = newOffset;
  }

  getPokemonDetail(pokemonName: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.APIURL}pokemon/${pokemonName}`);
  }

  getPokemonList(
    offset: number = 0,
    limit: number = 20
  ): Observable<Pokemon[]> {
    const url = `${this.APIURL}pokemon/?offset=${offset}&limit=${limit}`;
    return this.http
      .get<PokemonResults>(url)
      .pipe(map((data: PokemonResults) => data.results));
  }

  fetchDetailedPokemonData(pokemonList: Pokemon[]): Observable<Pokemon[]> {
    return of(...pokemonList).pipe(
      mergeMap((pokemon) => this.getPokemonDetail(pokemon.name)),
      toArray()
    );
  }

  getData() {
    this.getPokemonList().subscribe((pokemonList) => {
      this.fetchDetailedPokemonData(pokemonList).subscribe(
        (detailedPokemonList) => {
          this.pokemonList = detailedPokemonList;
        }
      );
    });
  }
}
