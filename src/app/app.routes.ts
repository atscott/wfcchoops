import {RouterModule, Routes} from '@angular/router';

import {About} from './about';
import {DataResolver} from './app.resolver';
import {Home} from './home';
import {NoContent} from './no-content';


export const ROUTES: Routes = [
  {path: '', component: Home},
  {path: 'home', component: Home},
  {path: 'about', component: About},
  {path: '**', component: NoContent},
];
