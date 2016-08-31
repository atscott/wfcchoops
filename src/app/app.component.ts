import {Component, ViewEncapsulation} from '@angular/core';
import {ROUTES} from './app.routes';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.style.css'],
  template: `
  <md-sidenav-layout fullscreen>
    <md-sidenav #sidenav [mode]="sidenavMode" [opened]="sidenavMode === 'side'" (window:resize)="onResize($event)">
      <md-nav-list>
        <a md-list-item *ngFor="let route of routes" routerLink="{{route.path}}" routerLinkActive="active">
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
  routes = ROUTES.filter(r => r.data && r.data['title']);
  sidenavMode = 'side';

  constructor() {}

  ngOnInit() { this.onResize(); }

  onResize() { this.sidenavMode = window.innerWidth < 500 ? 'over' : 'side'; }
}
