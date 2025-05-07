import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'change-detection',
    loadComponent: () => import('./features/change-detection/change-detection.component').then(c => c.ChangeDetectionComponent)
  },
  {
    path: 'named-router-outlets',
    loadChildren: () => import('./features/named-router-outlets/named-router-outlets.component')
  },
  {
    path: '',
    redirectTo: 'change-detection',
    pathMatch: 'full'
  }
];
