import { Routes } from '@angular/router';

export const appRoutes: Routes = [{
  path: 'named-router-outlets',
  loadChildren: () => import('./features/named-router-outlets/named-router-outlets.component')
},
{
  path: '',
  redirectTo: 'named-router-outlets',
  pathMatch: 'full'
}];
