import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, forkJoin } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { Pokemon, PokemonResults } from '../../model/pokemon';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private pokemonListSubject: BehaviorSubject<Pokemon[]> = new BehaviorSubject<
    Pokemon[]
  >([]);
  public pokemonList$: Observable<Pokemon[]> =
    this.pokemonListSubject.asObservable();

  constructor(private http: HttpClient) {}

  fetchPokemonList(offset: number = 0, limit: number = 20): Observable<void> {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
    return this.http.get<PokemonResults>(url).pipe(
      map((data: PokemonResults) => data.results),
      mergeMap((pokemonResults) =>
        this.fetchDetailedPokemonData(pokemonResults)
      ),
      map((detailedPokemonList) => {
        this.pokemonListSubject.next(detailedPokemonList);
      })
    );
  }

  private fetchDetailedPokemonData(
    pokemonList: { name: string; url: string }[]
  ): Observable<Pokemon[]> {
    return forkJoin(
      pokemonList.map((pokemon) => this.http.get<Pokemon>(pokemon.url))
    );
  }
}
