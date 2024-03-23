import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonLink } from '../../model/pokemon';

@Injectable({
  providedIn: 'root',
})
export class ApiPokemonService {
  urlBase = 'https://pokeapi.co/api/v2/pokemon/';
  constructor(private http: HttpClient) {}

  getAll(): Observable<PokemonLink[]> {
    return this.http.get(this.urlBase) as Observable<PokemonLink[]>;
  }
}
