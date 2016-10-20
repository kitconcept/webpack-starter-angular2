import { Component } from "@angular/core";

import { HomeComponent } from "./home";
import { AboutComponent } from "./about";
import { BackendComponent } from "./backend";
import { NavbarComponent } from "./navbar";
import "./styles.scss";

@Component({
  selector: "plone-app",
  template: `
    <plone-navbar></plone-navbar>
    <div>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {}
