import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./domains/shared/components/layout/layout.component'),
    children: [
      {
        path: '',
        loadComponent: () => import('./domains/products/pages/list/list.component')
      },
      {
        path: 'about',
        loadComponent: () => import('./domains/info/pages/about/about.component')
      },
      {
        path: 'product/:id',
        loadComponent: () => import('./domains/products/pages/product-detail/product-detail.component')
      }
    ]
  },
  {
    path: '**',
    loadComponent: () => import('./domains/info/pages/not-found/not-found.component')
  }
];
