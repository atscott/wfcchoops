import {Routes} from '@angular/router';

import {About} from './about';
import {Contact} from './contact/contact.component';
import {Home} from './home';
import {K4} from './k4/k4.component';
import {Links} from './links/links.component';
import {NoContent} from './no-content';
import {Teams} from './teams/teams.component';
import {Tournaments} from './tournaments/tournaments.component';
import {Whs} from './whs/whs.component';

export const ROUTES:Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: Home, data: {title: 'Home', icon: 'assets/img/Basketball-home.png'}},
  {path: 'about', component: About, data: {title: 'About us', icon: 'assets/img/Basketball-about.png'}},
  {
    path: 'tournaments',
    component: Tournaments,
    data: {title: 'WFCC / local tournaments', icon: 'assets/img/Basketball-tournaments.png'}
  },
  {path: 'teams', component: Teams, data: {title: 'WFCC teams', icon: 'assets/img/Basketball-teams.png'}},
  {path: 'whs', component: Whs, data: {title: 'WHS basketball', icon: 'assets/img/Basketball-WHS.png'}},
  {path: 'k-4', component: K4, data: {title: 'WFCC K-4 programs', icon: 'assets/img/Basketball-k-8.png'}},
  {path: 'links', component: Links, data: {title: 'Links', icon: 'assets/img/Basketball-links.png'}},
  {path: 'contact', component: Contact, data: {title: 'Contact us', icon: 'assets/img/Basketball-contact.png'}},
  {path: '**', component: NoContent},
];
