import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, forkJoin } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { Pokemon, PokemonResults } from '../../model/pokemon';
import { BackgroundCardForType } from '../../model/CSS';
@Injectable({
  providedIn: 'root',
})
export class StateService {
  private pokemonListSubject: BehaviorSubject<Pokemon[]> = new BehaviorSubject<
    Pokemon[]
  >([]);
  public pokemonList$: Observable<Pokemon[]> =
    this.pokemonListSubject.asObservable();
  backgroundColors: BackgroundCardForType = {
    normal: '#f2f2f2',
    fire: '#ff7f50',
    water: '#6495ed',
    electric: '#ffd700',
    grass: '#3cb371',
    ice: '#afeeee',
    fighting: '#a52a2a',
    poison: '#800080',
    ground: '#8b4513',
    flying: '#87ceeb',
    psychic: '#ff69b4',
    bug: '#556b2f',
    rock: '#696969',
    ghost: '#483d8b',
    dragon: '#483d8b',
    dark: '#2f4f4f',
    steel: '#708090',
    fairy: '#ff1493',
    stellar: '#ffd700',
  };

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
  getPokemonById(id: number): Observable<Pokemon> {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    return this.http.get<Pokemon>(url);
  }

  getPokemonSpeciesDetailsById(id: number): Observable<any> {
    const url = `https://pokeapi.co/api/v2/pokemon-species/${id}`;
    return this.http.get<any>(url);
  }
  upFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
