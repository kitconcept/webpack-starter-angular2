import 'angular2/bundles/angular2-polyfills';

import 'angular2/platform/browser';
import 'angular2/core';
import 'angular2/http';
import 'angular2/router';

import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';

import {MyApp} from './components/app';

bootstrap(MyApp, [
  ...HTTP_PROVIDERS, // using spread operator
  ...ROUTER_PROVIDERS
]).catch((console) => console.error(console));
