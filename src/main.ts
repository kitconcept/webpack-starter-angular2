import 'zone.js/dist/zone';
import 'reflect-metadata/Reflect.js';
import '@angular/platform-browser-dynamic';
import '@angular/http';
import '@angular/router';

import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import {APP_ROUTER_PROVIDERS} from './app.routes';
import {MyApp} from './components/app';

bootstrap(MyApp, [
  ...HTTP_PROVIDERS,
  ...APP_ROUTER_PROVIDERS
]).catch((console) => console.error(console));
