import { Component } from "@angular/core";

@Component({
  selector: "plone-navbar",
  template: `
    <div>
      <a [routerLink]="['/']">Home</a>
      <a [routerLink]="['/about']">About</a>
      <a [routerLink]="['/backend']">Backend</a>
    </div>
  `,
})
export class NavbarComponent {
  constructor() {
    console.log("In Navbar constructor");
  }
}
