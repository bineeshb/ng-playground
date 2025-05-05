import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterOutlet, provideRouter, withComponentInputBinding } from '@angular/router';
import { appRoutes } from './app.routes';

@Component({
  selector: 'app-root',
  template: `
    <h1>NG Playground</h1>
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
export class App { }

bootstrapApplication(App, {
  providers: [provideRouter(appRoutes, withComponentInputBinding())]
});
