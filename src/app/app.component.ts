import {Component, ViewEncapsulation} from '@angular/core';
import {ROUTES} from './app.routes';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styles: [
    require('./app.style.css'), require('./layout/layout.ie.fixes.css'),
    require('./layout/layout-attributes.scss').toString()
  ],
  template: require('./app.template.html')
})
export class AppComponent {
  routes = [];
  sidenavMode = 'side';

  constructor() {
  }

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
