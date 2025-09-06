import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {Injectable, provideZonelessChangeDetection} from '@angular/core';
import {Title, provideClientHydration, withIncrementalHydration} from '@angular/platform-browser';
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideRouter, RouterStateSnapshot, TitleStrategy, withViewTransitions} from '@angular/router';

import {ROUTES} from './app.routes';

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

export const appConfig = {
  providers: [
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(ROUTES, withViewTransitions()),
    {provide: TitleStrategy, useClass: TemplatePageTitleStrategy},
    provideClientHydration(withIncrementalHydration()),
    provideZonelessChangeDetection(),
  ]
}
