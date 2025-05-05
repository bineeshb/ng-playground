import { Component } from '@angular/core';
import { RouterOutlet, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';

@Component({
  selector: 'app-named-router-outlets',
  imports: [RouterOutlet],
  templateUrl: './named-router-outlets.component.html',
  styleUrl: './named-router-outlets.component.scss'
})
export class NamedRouterOutletsComponent {

}

const routes: Routes = [{
  path: '',
  component: NamedRouterOutletsComponent,
  children: [{
    path: '',
    component: ListComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    outlet: 'content'
  }]
}];

export default routes;
