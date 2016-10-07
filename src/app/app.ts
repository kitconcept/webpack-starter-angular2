import { Component } from "@angular/core";

import { HomeComponent } from "./home";
import { AboutComponent } from "./about";
import { BackendComponent } from "./backend";

@Component({
  selector: "kc-app",
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
export class AppComponent {}
