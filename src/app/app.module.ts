import {ApplicationRef, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {About} from './about';
import {App} from './app.component';
import {APP_RESOLVER_PROVIDERS} from './app.resolver';
import {ROUTES} from './app.routes';
import {Contact} from './contact/contact.component';
import {ENV_PROVIDERS} from './environment';
import {Home} from './home';
import {K4} from './k4/k4.component';
import {Links} from './links/links.component';
import {MdModule} from './md.module';
import {NoContent} from './no-content';
import {OpenGym} from './opengym/opengym.component';
import {Teams} from './teams/teams.component';
import {Tournaments} from './tournaments/tournaments.component';
import {Whs} from './whs/whs.component';

// Application wide providers
const APP_PROVIDERS = [...APP_RESOLVER_PROVIDERS];

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [App],
  declarations: [
    About,
    App,
    Contact,
    Home,
    K4,
    Links,
    NoContent,
    OpenGym,
    Teams,
    Tournaments,
    Whs,
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    HttpModule,
    MdModule.forRoot(),
    RouterModule.forRoot(ROUTES, {useHash: true})
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS
  ]
})
export class AppModule {
  constructor(public appRef:ApplicationRef) {
  }
}
