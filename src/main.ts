import { Component, inject } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { Router, RouterOutlet, provideRouter, withComponentInputBinding } from '@angular/router';
import { appRoutes } from './app.routes';

@Component({
  selector: 'app-root',
  template: `
    <h1>NG Playground</h1>
    <select (change)="goto($event)">
    @for(route of routes; track route.path) {
      <option [value]="route.path" [attr.selected]="route.path === defaultRoute ? true : null">{{ route.path }}</option>
    }
    </select>
    <router-outlet></router-outlet>
  `,
  styles: `
    :host {
      display: block;
      height: 100vh;
    }

    h1 {
      color: var(--test-color);
    }
  `,
  imports: [RouterOutlet],
})
export class App {
  routes = appRoutes.filter(({ path }) => !!path);
  defaultRoute = appRoutes.find(({ path }) => path === '')?.redirectTo ?? appRoutes[0].path;
  router = inject(Router);

  goto(event: Event): void {
    const route = (event.target as HTMLInputElement)?.value;
    if (typeof route === 'string' && route.length > 0) {
      this.router.navigate([route]);
    }
  }
}

bootstrapApplication(App, {
  providers: [provideRouter(appRoutes, withComponentInputBinding())]
});
