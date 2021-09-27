import {Component} from '@angular/core';
import {ROUTES} from './app.routes';
import {Routes} from '@angular/router';

@Component({
  selector: 'app',
  styleUrls: ['./app.style.css'],
  templateUrl: './app.template.html'
})
export class AppComponent {
  routes: Routes = [];
  sidenavMode: 'side'|'over' = 'side';

  ngOnInit() {
    this.onResize(window.innerWidth);
    this.routes = ROUTES.filter(r => r.data && r.data['title']);
  }

  onResize(width) {
    const contentWidth = 700;
    const sidenavWidth = 476;
    this.sidenavMode = width < contentWidth + sidenavWidth ? 'over' : 'side';
  }
}
