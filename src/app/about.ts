import { Component } from "@angular/core";

@Component({
  selector: "kc-about",
  template: `
    <h2>About Component</h2>
    <p>This is the about component which can be found in src/app/about.ts</p>
  `,
})
export class AboutComponent {
  constructor() {
    console.log("In About constructor");
  }
}
