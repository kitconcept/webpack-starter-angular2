import {Component} from "@angular/core";

@Component({
  selector: "my-home",
  template: `
    <h2>Home Component</h2>
    <p>This is the home component which can be found in src/app/home.ts</p>
  `,
})
export class Home {
  constructor() {
    console.log("In Home constructor");
  }
}
