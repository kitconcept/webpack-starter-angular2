import 'zone.js/dist/zone';
import 'reflect-metadata/Reflect.js';
import '@angular/http';
import '@angular/router';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
