import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  template: `
    <div class="navBar">
      <button type="button" class="previus">PREVIUS</button>
      <h2>Pokemon list:</h2>
      <button type="button" class="next">NEXT</button>
    </div>
  `,
  styles: ``,
})
export class NavBarComponent {}
