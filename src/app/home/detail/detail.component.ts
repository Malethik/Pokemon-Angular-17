import { Component, Inject, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [DetailComponent],
  template: `
    <div>
      <h2 (click)="clg()"></h2>
    </div>
  `,
  styles: ``,
})
export default class DetailComponent {
  clg(): void {
    console.log();
  }
}
