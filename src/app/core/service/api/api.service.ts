import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, mergeMap, switchMap, toArray } from 'rxjs/operators';
import { Pokemon, PokemonResults } from '../../model/pokemon';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private APIURL = 'https://pokeapi.co/api/v2/';
  offset = 0;
  pokemonList: Pokemon[] = [];
  private pokemonListSubject = new BehaviorSubject<Pokemon[]>([]);
  pokemonList$ = this.pokemonListSubject.asObservable();
  private offsetSubject = new BehaviorSubject<number>(0);
  offset$ = this.offsetSubject.asObservable();

  constructor(private http: HttpClient) {}

  updateOffset(newOffset: number): void {
    this.offsetSubject.next(newOffset);
  }

  getPokemonDetail(pokemonName: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.APIURL}pokemon/${pokemonName}`);
  }

  getPokemonList(limit: number = 20): Observable<Pokemon[]> {
    return this.offset$.pipe(
      switchMap((offset) => {
        const url = `${this.APIURL}pokemon/?offset=${offset}&limit=${limit}`;
        return this.http
          .get<PokemonResults>(url)
          .pipe(map((data: PokemonResults) => data.results));
      })
    );
  }

  fetchDetailedPokemonData(pokemonList: Pokemon[]): Observable<Pokemon[]> {
    return of(...pokemonList).pipe(
      mergeMap((pokemon) => this.getPokemonDetail(pokemon.name)),
      toArray()
    );
  }

  getData() {
    this.getPokemonList().subscribe(
      (pokemonList) => {
        this.fetchDetailedPokemonData(pokemonList).subscribe(
          (detailedPokemonList) => {
            this.pokemonListSubject.next(detailedPokemonList);
          }
        );
      },
      (error) => {
        console.error('Error fetching Pokemon list:', error);
      }
    );
  }
}
