import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Title, provideClientHydration} from '@angular/platform-browser';
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideRouter, RouterStateSnapshot, TitleStrategy} from '@angular/router';

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
    provideRouter(ROUTES),
    {provide: TitleStrategy, useClass: TemplatePageTitleStrategy},
    provideClientHydration(),
  ]
}
