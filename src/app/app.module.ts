import {ApplicationRef, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {APP_RESOLVER_PROVIDERS} from './app.resolver';
import {About} from './about';
import {AppComponent} from './app.component';
import {Contact} from './contact/contact.component';
import {environment} from '../environments/environment';
import {Home} from './home';
import {K4} from './k4/k4.component';
import {Links} from './links/links.component';
import {MdModule} from './md.module';
import {NoContent} from './no-content';
import {OpenGym} from './opengym/opengym.component';
import {ROUTES} from './app.routes';
import {Teams} from './teams/teams.component';
import {Tournaments} from './tournaments/tournaments.component';
import {Whs} from './whs/whs.component';

// Application wide providers
const APP_PROVIDERS = [...APP_RESOLVER_PROVIDERS];

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    About,
    AppComponent,
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
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MdModule,
    FlexLayoutModule,
    RouterModule.forRoot(ROUTES, {useHash: !environment.production})
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    APP_PROVIDERS
  ]
})
export class AppModule {
  constructor(public appRef:ApplicationRef) {
  }
}
