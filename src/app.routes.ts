import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'binding-css-variables',
    loadComponent: () => import('./features/binding-css-variables/binding-css-variables.component').then(c => c.BindingCssVariablesComponent)
  },
  {
    path: 'change-detection',
    loadComponent: () => import('./features/change-detection/change-detection.component').then(c => c.ChangeDetectionComponent)
  },
  {
    path: 'color-change-directive',
    loadComponent: () => import('./features/color-change-directive/color-change-directive.component').then(c => c.ColorChangeDirectiveComponent)
  },
  {
    path: 'dependency-injection',
    loadComponent: () => import('./features/dependency-injection/dependency-injection.component').then(c => c.DependencyInjectionComponent)
  },
  {
    path: 'named-router-outlets',
    loadChildren: () => import('./features/named-router-outlets/named-router-outlets.component')
  },
  {
    path: '',
    redirectTo: 'dependency-injection',
    pathMatch: 'full'
  }
];
