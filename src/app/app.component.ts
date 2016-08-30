import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.style.css'],
  template: `
  <md-sidenav-layout>
    <md-sidenav mode="over">
      <md-list>
        <md-list-item>
          <a [routerLink]=" ['./'] ">
            Index
          </a>
        </md-list-item>
        <md-list-item>
          <a [routerLink]=" ['./home'] ">
            Home
          </a>
        </md-list-item>
        <md-list-item>
          <a [routerLink]=" ['./detail'] ">
            Detail
          </a>
        </md-list-item>
        <md-list-item>
          <a [routerLink]=" ['./about'] ">
            About
          </a>
        </md-list-item>
      </md-list>
    </md-sidenav>
    <md-content>
      <md-toolbar color="primary">
        <div>
          <md-toolbar-row>
            <button md-icon-button (click)="start.open()">
              <md-icon>menu</md-icon>
            </button>
            <span>Wrightstown Full Court Club</span>
          </md-toolbar-row>
        </div>
      </md-toolbar>

      <main style="margin:8px">
        <router-outlet></router-outlet>
      </main>


    </md-content>
  </md-sidenav-layout>
  `
})
export class App {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';

  constructor() {}
}
