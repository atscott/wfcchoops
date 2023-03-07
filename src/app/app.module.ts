import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {ApplicationRef, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';

import {About} from './about';
import {AppComponent} from './app.component';
import {ROUTES} from './app.routes';
import {Contact} from './contact/contact.component';
import {Home} from './home';
import {K4} from './k4/k4.component';
import {Links} from './links/links.component';
import {MatModule} from './md.module';
import {NoContent} from './no-content';
import {Teams} from './teams/teams.component';
import {Tournaments} from './tournaments/tournaments.component';
import {Whs} from './whs/whs.component';

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatModule,
    RouterModule.forRoot(ROUTES),
    About,
    Contact,
    Home,
    K4,
    Links,
    NoContent,
    Teams,
    Tournaments,
    Whs,
  ],
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {}
}
