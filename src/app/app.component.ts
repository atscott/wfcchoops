import {Component, ViewEncapsulation} from '@angular/core';
import {ROUTES} from './app.routes.ts';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./app.style.css')],
  template: require('./app.template.html')
})
export class App {
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
