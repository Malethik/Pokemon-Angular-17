import { HttpClient } from '@angular/common/http';
import { Component, Injector, OnInit, inject } from '@angular/core';
import { ApiService } from '../../core/service/api/api.service';
import { Pokemon } from '../../core/model/pokemon';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  providers: [ApiService],
  template: `
    <div class="navBar">
      <button type="button" class="previus">PREVIUS</button>
      <h2>Pokemon list:</h2>
      <button type="button" class="next" (click)="loadNextPage()">NEXT</button>
    </div>
  `,
  styles: ``,
})
export class NavBarComponent {
  offset = 0;
  limit = 20;
  pokemonList: Pokemon[] = [];
  private Apiservice = inject(ApiService);

  loadNextPage(): void {
    this.Apiservice.offset$.subscribe((offset) => {
      this.Apiservice.updateOffset(offset + 20);
      console.log('Currente offset:', this.Apiservice.offset$);
    });
  }
}
