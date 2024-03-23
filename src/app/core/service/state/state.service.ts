import { Injectable, inject } from '@angular/core';
import { PokemonLink, pokemonCard } from '../../model/pokemon';
import { HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiPokemonService } from '../api/api-pokemon.service';
import { StorageService } from '../storage/storage.service';

type PokeState = {
  poke: PokemonLink[];
  error: HttpErrorResponse | null;
};

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private state$: BehaviorSubject<PokeState>;
  public storageSrv = inject(StorageService<pokemonCard>);
  private apiRepo = inject(ApiPokemonService);
  constructor() {
    this.state$ = new BehaviorSubject({
      poke: [] as PokemonLink[],
      error: null as HttpErrorResponse | null,
    });
  }

  getState(): Observable<PokeState> {
    return this.state$.asObservable();
  }

  loadPoke() {
    this.apiRepo.getAll().subscribe({
      next: (pokes) => {
        const state: PokeState = {
          ...this.state$.value,
          poke: pokes,
        };
        this.state$.next(state);
      },
      error: (error: HttpErrorResponse) => {
        const state: PokeState = {
          ...this.state$.value,
          error: error,
        };
        this.state$.next(state);
      },
    });
  }
}
