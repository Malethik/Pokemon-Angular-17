import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../../core/service/api/api.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  providers: [ApiService],
  template: ``,
  styles: ``,
})
export class NavBarComponent {
  private Apiservice = inject(ApiService);

  constructor() {}
}
