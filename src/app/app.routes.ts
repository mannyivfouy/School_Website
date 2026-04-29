import { Routes } from '@angular/router';
import { Layout } from './layout/layout';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'layout/home',
    pathMatch: 'full',
  },
  {
    path: 'layout',
    component: Layout,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadComponent: () => import('./pages/home/home').then((m) => m.Home),
      },
      {
        path: 'about',
        loadComponent: () => import('./pages/about/about').then((m) => m.About),
      },
      {
        path: 'contact',
        loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
      },
    ],
  },
];
