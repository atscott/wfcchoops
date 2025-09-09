import {Routes} from '@angular/router';

export const ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component'),
    title: 'Home',
    data: {icon: 'assets/img/Basketball-home.png'}
  },
  {
    path: 'home',
    redirectTo: '',
  },
  {
    path: 'about',
    loadComponent: () => import ('./about/about.component'),
    title: 'About us',
    data: {icon: 'assets/img/Basketball-about.png'}
  },
  {
    path: 'tournaments',
    loadComponent: () => import('./tournaments/tournaments.component'),
    title: 'WFCC / local tournaments',
    data: {icon: 'assets/img/Basketball-tournaments.png'}
  },
  {
    path: 'teams',
    loadComponent: () => import('./teams/teams.component'),
    title: 'WFCC teams',
    data: {icon: 'assets/img/Basketball-teams.png'}
  },
  {
    path: 'whs',
    loadComponent: () => import('./whs/whs.component'),
    title: 'WHS basketball',
    data: {icon: 'assets/img/Basketball-WHS.png'}
  },
  {
    path: 'k-4',
    loadComponent: () => import('./k4/k4.component'),
    title: 'WFCC K-4 programs',
    data: {icon: 'assets/img/Basketball-k-8.png'}
  },
  {
    path: 'links',
    loadComponent: () => import('./links/links.component'),
    title: 'Links',
    data: {icon: 'assets/img/Basketball-links.png'}
  },
  {
    path: 'contact',
    loadComponent: () => import('./contact/contact.component'),
    data: {title: 'Contact us', icon: 'assets/img/Basketball-contact.png'}
  },
  {path: '**', loadComponent: () => import('./no-content/no-content')},
];
