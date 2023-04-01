import './polyfills.ts';

import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {enableProdMode, importProvidersFrom, Injectable} from '@angular/core';
import {bootstrapApplication, Title} from '@angular/platform-browser';
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideRouter, RouterStateSnapshot, TitleStrategy} from '@angular/router';

import {AppComponent} from './app/app.component';
import {ROUTES} from './app/app.routes';
import {environment} from './environments/environment';

if (environment.production) {
  enableProdMode();
}

@Injectable({providedIn: 'root'})
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`${title} | WFCC Hoops`);
    }
  }
}

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(ROUTES),
    {provide: TitleStrategy, useClass: TemplatePageTitleStrategy},
  ]
});
