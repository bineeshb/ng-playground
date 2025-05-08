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
      <option [value]="route.path">{{ route.path }}</option>
    }
    </select>
    <router-outlet></router-outlet>
  `,
  styles: `
    :host {
      display: block;
      height: 100vh;
    }
  `,
  imports: [RouterOutlet],
})
export class App {
  routes = appRoutes.filter(({ path }) => !!path);
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
