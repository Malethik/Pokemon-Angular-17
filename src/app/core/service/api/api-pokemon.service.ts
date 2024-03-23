import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonLink } from '../../model/pokemon';

const urlBase = 'https://pokeapi.co/api/v2/ability/?limit=20&offset=20';

@Injectable({
  providedIn: 'root',
})
export class ApiPokemonService {
  urlApi = new URL('poke', urlBase).toString;
  constructor(private http: HttpClient) {}

  getAll(): Observable<PokemonLink[]> {
    return this.http.get(this.urlApi) as Observable<PokemonLink[]>;
  }
}
