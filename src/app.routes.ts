import {provideRouter, RouterConfig} from '@angular/router';
import {Home} from './components/home';
import {About} from './components/about';

export const routes: RouterConfig = [
  { path: '',      component: Home},
  { path: 'about', component: About}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
