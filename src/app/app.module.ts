import {ApplicationRef, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {About} from './about';
// App is our top level component
import {App} from './app.component';
import {APP_RESOLVER_PROVIDERS} from './app.resolver';
import {ROUTES} from './app.routes';
/*
 * Platform and Environment providers/directives/pipes
 */
import {ENV_PROVIDERS} from './environment';
import {Home} from './home';
import {MdModule} from './md.module';
import {NoContent} from './no-content';


// Application wide providers
const APP_PROVIDERS = [...APP_RESOLVER_PROVIDERS];

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ App ],
  declarations: [
    App,
    About,
    Home,
    NoContent
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    HttpModule,
    MdModule.forRoot(),
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS
  ]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {}
}
