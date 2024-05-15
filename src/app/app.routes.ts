import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./list/list.component').then((p) => p.ListComponent),
  },
  {
    path: 'detail/:id',
    loadComponent: () =>
      import('./detail/detail.component').then((p) => p.DetailComponent),
  },
];

