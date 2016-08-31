import {Component, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./app.style.css')],
  template: `
  <md-sidenav-layout fullscreen>
    <md-sidenav #sidenav [mode]="sidenavMode" [opened]="sidenavMode === 'side'" (window:resize)="onResize($event.target.innerWidth)">
      <md-nav-list>
        <a md-list-item *ngFor="let route of routes" routerLink="{{route.path}}" routerLinkActive="active" (click)="sidenavMode === 'over' && sidenav.close()">
          <span md-line> {{route?.data['title']}} </span>
        </a>
      </md-nav-list>
    </md-sidenav>
    <md-content>
      <md-toolbar color="primary">
        <button disableRipple md-icon-button (click)="sidenav.toggle()" *ngIf="sidenavMode === 'over'">
          <md-icon>menu</md-icon>
        </button>
        Wrightstown Full Court Club
      </md-toolbar>

      <md-card class="middle-column">
        <router-outlet></router-outlet>
      </md-card>

    </md-content>
  </md-sidenav-layout>
  `
})
export class App {
  routes = [];
  sidenavMode = 'side';

  constructor(private router: Router) {}

  ngOnInit() {
    this.onResize(window.innerWidth);
    this.routes = this.router.config.filter(r => r.data && r.data['title']);
  }

  onResize(width) { this.sidenavMode = width < 700 ? 'over' : 'side'; }
}
