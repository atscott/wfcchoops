import './polyfills.ts';

import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {enableProdMode, importProvidersFrom} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideRouter} from '@angular/router';

import {AppComponent} from './app/app.component';
import {ROUTES} from './app/app.routes';
import {environment} from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(ROUTES),
  ]
});
