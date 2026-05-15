import { Routes } from '@angular/router';
import { Layout } from './layout/layout';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadComponent: () => import('./features/home/home').then((m) => m.Home),
      },
      {
        path: 'about',
        loadComponent: () => import('./features/about/about').then((m) => m.About),
      },
      {
        path: 'contact',
        loadComponent: () => import('./features/contact/contact').then((m) => m.Contact),
      },
      {
        path: 'facilities',
        loadComponent: () => import('./features/facilities/facilities').then((m) => m.Facilities),
      },
      {
        path: 'internship',
        loadComponent: () => import('./features/internship/internship').then((m) => m.Internship),
      },
      {
        path: 'academics',
        loadComponent: () => import('./features/academics/academics').then((m) => m.Academics),
      },
    ],
  },
];
