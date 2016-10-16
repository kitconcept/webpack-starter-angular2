import { Component } from "@angular/core";

import { HomeComponent } from "./home";
import { AboutComponent } from "./about";
import { BackendComponent } from "./backend";
import { NavbarComponent } from "./navbar";

@Component({
  selector: "kc-app",
  template: `
    <h1>Webpack Starter Angular 2</h1>
    <plone-navbar></plone-navbar>
    <div>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {}
