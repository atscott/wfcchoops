/*
 * Angular 2 decorators and services
 */
import {Component, ViewEncapsulation} from '@angular/core';

import {AppState} from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.style.css'],
  template: `
  <md-sidenav-layout>
    <md-sidenav #start mode="over">
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
      <md-toolbar color="pimary">
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
        <pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>
      </main>


    </md-content>
  </md-sidenav-layout>
  `
})
export class App {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';

  constructor(public appState: AppState) {}

  ngOnInit() { console.log('Initial App State', this.appState.state); }
}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github
 * for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
