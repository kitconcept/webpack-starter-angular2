import { Component } from "@angular/core";

import { HomeComponent } from "./home";
import { AboutComponent } from "./about";

@Component({
  selector: "my-app",
  template: `
    <h1>Webpack Starter Angular 2</h1>
    <div>
      <a [routerLink]="['/']">Home</a>
      <a [routerLink]="['/about']">About</a>
    </div>
    <div>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {}
