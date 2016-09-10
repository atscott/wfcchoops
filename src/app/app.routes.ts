import {RouterModule, Routes} from '@angular/router';

import {About} from './about';
import {Contact} from './contact/contact.component';
import {Home} from './home';
import {K4} from './k4/k4.component';
import {Links} from './links/links.component';
import {NoContent} from './no-content';
import {OpenGym} from './opengym/opengym.component';
import {Teams} from './teams/teams.component';
import {Tournaments} from './tournaments/tournaments.component';
import {Whs} from './whs/whs.component';

export const ROUTES:Routes = [
  {path: '', component: Home},
  {path: 'home', component: Home, data: {title: 'Home'}},
  {path: 'about', component: About, data: {title: 'About us'}},
  {
    path: 'tournaments',
    component: Tournaments,
    data: {title: 'WFCC / local tournaments'}
  },
  {path: 'teams', component: Teams, data: {title: 'WFCC teams'}},
  {path: 'whs', component: Whs, data: {title: 'WHS basketball'}},
  {path: 'k-4', component: K4, data: {title: 'WFCC K-4 programs'}},
  {path: 'links', component: Links, data: {title: 'Links'}},
  {
    path: 'opengym',
    component: OpenGym,
    data: {title: 'WFCC open gym schedule'}
  },
  {path: 'contact', component: Contact, data: {title: 'Contact us'}},
  {path: '**', component: NoContent},
];
