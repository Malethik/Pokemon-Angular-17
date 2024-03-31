import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavBarComponent } from './home/nav-bar/nav-bar.component';
import DetailComponent from './home/detail/detail.component';
import HomeComponent from './home/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterModule,
    RouterOutlet,
    RouterLink,
    HeaderComponent,
    FooterComponent,
    NavBarComponent,
    DetailComponent,
    HomeComponent,
  ],
})
export class AppComponent {
  title = 'pokedex';
}
