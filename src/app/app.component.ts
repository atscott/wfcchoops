import {NgFor, NgIf, NgOptimizedImage} from '@angular/common';
import {Component, afterNextRender} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatLineModule} from '@angular/material/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {RouterLink, RouterLinkActive, RouterOutlet, Routes} from '@angular/router';

import {ROUTES} from './app.routes';

@Component({
  selector: 'app',
  styleUrls: ['./app.style.scss'],
  templateUrl: './app.template.html',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatListModule,
    NgFor,
    RouterLinkActive,
    RouterLink,
    MatLineModule,
    MatToolbarModule,
    NgIf,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    RouterOutlet,
    MatDividerModule,
    NgOptimizedImage,
  ]
})
export class AppComponent {
  routes: Routes = [];
  sidenavMode: 'side'|'over' = 'side';

  constructor() {
    afterNextRender(() => {
      this.onResize(window.innerWidth);
    });
  }

  ngOnInit() {
    this.routes = ROUTES.filter(r => r.title);
  }

  onResize(width: number) {
    const contentWidth = 700;
    const sidenavWidth = 476;
    this.sidenavMode = width < contentWidth + sidenavWidth ? 'over' : 'side';
  }
}
