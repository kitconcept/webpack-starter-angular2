import {Component} from '@angular/core';
import { Routes, ROUTER_DIRECTIVES} from '@angular/router';

import {Home} from './home';
import {About} from './about';
import {Backend} from './backend';

@Component({
  selector: 'my-app',
  directives: [ROUTER_DIRECTIVES],
  template: `
    <h1>Webpack Starter Angular 2</h1>
    <div>
      <a [routerLink]="['/']">Home</a>
      <a [routerLink]="['/about']">About</a>
      <a [routerLink]="['/backend']">Backend</a>
    </div>
    <div>
      <router-outlet></router-outlet>
    </div>
  `
})
@Routes([
  { path: '/',      component: Home},
  { path: '/about', component: About},
  { path: '/backend', component: Backend}
])
export class MyApp {}
