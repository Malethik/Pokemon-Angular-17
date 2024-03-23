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

  constructor(private http: HttpClient) {}

  getPokemonDetail(pokemonName: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.APIURL}pokemon/${pokemonName}`);
  }

  getPokemonList(): Observable<Pokemon[]> {
    return this.http
      .get<PokemonResults>(`${this.APIURL}pokemon/`)
      .pipe(map((data: PokemonResults) => data.results));
  }

  fetchDetailedPokemonData(pokemonList: Pokemon[]): Observable<Pokemon[]> {
    return of(...pokemonList).pipe(
      mergeMap((pokemon) => this.getPokemonDetail(pokemon.name)),
      toArray()
    );
  }
}
